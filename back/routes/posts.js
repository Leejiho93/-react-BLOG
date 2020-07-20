const express = require('express');
const db = require('../models');
const router = express.Router();

router.get('/', async (req, res, next) => {
    try {
        const posts = await db.Post.findAll({
            include: [{
                model: db.User,
                attribute: ['id', 'nickname'],
            }, {
                model: db.Comment,
                include: [{
                    model: db.User,
                    attributes: ['id', 'nickname'],
                    order: [['createdAt', 'DESC']],
                }]
            }, {
                model :db.Image,
            }],
            order: [['createdAt', 'DESC']],
        })
        // console.log('posts: ', posts);
        res.json(posts);
    } catch(e) {
        console.error(e);
        next(e);
    }
});;

module.exports = router;