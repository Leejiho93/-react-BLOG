const db = require('../models');

exports.isLoggedIn = (req, res, next) => {
    if (req.isAuthenticated()) {
        next();
    } else {
        res.status(404).send('로그인이 필요합니다.')
    }
}

exports.isNotLoggedIn = (req, res, next) => {
    if(!req.isAuthenticated()) {
        next();
    } else {
        res.state(401).send('로그인한 사용자는 접근할 수 없습니다.')
    }
}

exports.isPostExist = async (req, res, next) => {
    const post = await db.Post.findOne({ where: { id: req.parmas.id }})
    if (post) {
        next();
    } else {
        res.status(404).send('포스트가 존재하지 않습니다.');
    }
}