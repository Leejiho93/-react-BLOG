const express = require('express');
const bcrypt = require('bcrypt');
const passport = require('passport');
const db = require('../models');
const { isLoggedIn } = require('./middleware');

const router = express.Router();

// 유저 정보
router.get('/', isLoggedIn, (req, res) => {
    const user = Object.assign({}, req.user.toJSON());
    delete user.password;
    return res.json(user);
});

// 회원가입
router.post('/', async (req, res, next) => {
    const checkId = /^[a-z0-9]{5,20}$/;
    const checkNickname = /^[\w가-힣]{2,20}$/;
    const checkPassword = /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[0-9]).{8,20}$/;

    try {
        if (req.body.userId == '') {
            return res.status(401).send('필수 정보입니다.');
        }
        if (!checkId.test(req.body.userId)) {
            return res.status(401).send('아이디는 5~20자의 영문 소문자, 숫자만 사용 가능합니다.')
        }

        if (req.body.nickname == '') {
            return res.status(401).send('필수 정보입니다.');
        }
        if (!checkNickname.test(req.body.nickname)) {
            return res.status(401).send('닉네임은 2~20자의 한글, 영문자, 숫자만 사용 가능합니다.')
        }

        if (req.body.password == '') {
            return res.status(401).send('필수 정보입니다.');
        }
        if (!checkPassword.test(req.body.password)) {
            return res.status(401).send('비밀번호는 8~20자의 영문자, 숫자, 특수문자를 사용하세요.')
        }

        const existId = await db.User.findOne({
            where: {
                userId: req.body.userId,
            },
            attribute: ['userId'],
        });

        if (existId) {
            return res.status(403).send('이미 사용중인 아이디입니다.');
        }

        const existNickname = await db.User.findOne({
            where: {
                nickname: req.body.nickname,
            },
            attribute: ['nickname'],
        })

        if (existNickname) {
            return res.status(403).send('이미 사용중인 닉네임입니다.');
        }

        const hashedPassword = await bcrypt.hash(req.body.password, 12);
        const newUser = await db.User.create({
            nickname: req.body.nickname,
            userId: req.body.userId,
            password: hashedPassword,
        });
        return res.status(200).json(newUser);
    } catch (e) {
        console.error(e);
        next(e);
    }
})

// 로그인
router.post('/login', async (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
        if (err) {
            console.error(err);
            return next(err)
        }
        if (info) {
            return res.status(401).send(info.reason);
        }
        return req.login(user, async (loginErr) => {
            try {
                if (loginErr) {
                    return next(loginErr);
                }

                const fullUser = await db.User.findOne({
                    where: { id: user.id },
                    include: [{
                        model: db.Post,
                        as: 'Posts',
                        attributes: ['id'],
                    }],
                    attributes: ['id', 'nickname', 'userId'],
                });
                // console.log(fullUser)
                return res.json(fullUser);

            } catch (e) {
                console.error(e);
                next(e);
            }
        })
    })(req, res, next);
});

// 회원가입 아이디 유효성확인
router.post('/checkid', async (req, res, next) => {
    const checkId = /^[a-z0-9]{5,20}$/;
    const inputId = Object.keys(req.body);
    if (inputId == '') {
        return res.status(401).send('필수 정보입니다.');
    }
    if (!checkId.test(inputId)) {
        return res.status(401).send('5~20자의 영문 소문자, 숫자만 사용 가능합니다.')
    }
    try {
        const existId = await db.User.findOne({
            where: { userId: inputId },
            attributes: ['userId'],
        })

        if (existId) {
            return res.status(401).send('이미 사용중인 아이디입니다.')
        }

        return res.send('멋진 아이디 입니다!');
    } catch (e) {
        console.error(e);
        next(e);
    }
});

// 회원가입 닉네임 유효성 검사
router.post('/checknickname', async (req, res, next) => {
    const checkNickname = /^[\w가-힣]{2,20}$/;
    const inputNickname = Object.keys(req.body);
    if (inputNickname == '') {
        return res.status(401).send('필수 정보입니다.');
    }
    if (!checkNickname.test(inputNickname)) {
        return res.status(401).send('2~20자의 한글, 영문자, 숫자만 사용 가능합니다.')
    }

    try {
        const existNickname = await db.User.findOne({
            where: { nickname: inputNickname },
            attributes: ['nickname'],
        })

        // console.log('existNickname: ', existNickname);

        if (existNickname) {
            return res.status(401).send('이미 사용 중인 닉네임입니다.')
        }

        return res.send('사용 가능한 닉네임입니다.')
    } catch (e) {
        console.error(e);
        next(e);
    }
});

// 로그아웃
router.post('/logout', (req, res) => {
    req.logout();
    req.session.destroy();
    res.send('logout 성공');
});

router.get('/:id', async (req, res, next) => {
    try {
        const user = await db.User.findAll({
            where: { id: parseInt(req.params.id) },
            include: [{
                model: db.Post,
            }],
            attributes: ['id', 'nickname']
        });
        res.json(user)
    } catch (e) {
        console.error(e);
        next(e);
    }
})

router.get('/:id/posts', async (req, res, next) => {
    try {
        const posts = await db.Post.findAll({
            where: {
                UserId: parseInt(req.params.id ,10) || (req.user && req.user.id) || 0,
            },
            include: [{
                model: db.User,
                attributes: ['id', 'nickname'],
            }, {
                model: db.Image,
            }],
            order: [['createdAt', 'DESC']]
        })
       res.json(posts);
    } catch (e) {
        console.error(e);
        next(e);
    }
});
module.exports = router;