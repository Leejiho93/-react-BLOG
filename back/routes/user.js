const express = require('express');
const bcrypt = require('bcrypt');
const passport = require('passport');
const db = require('../models');
const { isLoggedIn } = require('./middleware');
const { default: user } = require('../../front/reducers/user');

const router = express.Router();

// 유저 정보
router.get('/', isLoggedIn, (req, res) => {
    const user = Object.assign({}, req.user.toJSON());
    delete user.password;
    return res.json(user);
});

// 회원가입
router.post('/', async (req, res, next) => {
    try {
        const exUser = await db.User.findOne({
            where: {
                userId: req.body.userId,
            },
        });

        if (exUser) {
            return res.status(403).send('이미 사용중인 아이디입니다.');
        }
        const hashedPassword = await bcrypt.hash(req.body.password, 12);
        const newUser = await db.User.create({
            nickname: req.body.nickname,
            userId: req.body.userId,
            password: hashedPassword,
        });
        console.log(newUser);
        return res.status(200).json(newUser);
    } catch(e) {
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
                console.log(fullUser)
                return res.json(fullUser);

            } catch(e) {
                console.error(e);
                next(e);
            }
        })
    })(req, res, next);
});

// 회원가입 유효성확인
// router.post('/checkid', async (req, res, next) => {
//     const checkId = /^[a-z0-9]{5,20}$/;
//     if (!checkId.test(req.body.id)) {
//         return res.status(401).send('5~20자의 영문 소문자, 숫자만 사용 가능합니다.')
//     }
//     try {
//         const existId = await db.User.fineOne({
//             where: { id: req.body.id},
//             attributes: ['userId'],
//         })
        
//         if (existId) {
//             return res.status(401).send('이미 사용중인 아이디입니다.')
//         }

//         return res.send(existId);
//     } catch(e) {
//         console.error(e);
//         next(e);
//     }
// });

// 로그아웃
router.post('/logout', (req, res) => {
    req.logout();
    req.session.destroy();
    res.send('logout 성공');
})

module.exports = router;