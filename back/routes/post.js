const express = require('express');
const multer = require('multer');
const router = express.Router();

const db = require('../models');
const { isLoggedIn } = require('./middleware');


router.post('/', isLoggedIn, async(req, res, next) => {
    try {
        console.log('req.body', req.body)
        console.log('req.user', req.user.id)
        const newPost = await db.Post.create({
            title: req.body.title,
            content: req.body.content,
            UserId: req.user.id,
            category: req.body.category,
        })

        console.log('newPost', newPost);

        const fullPost = await db.Post.findOne({
            where: { id: newPost.id },
            include: [{
                model: db.User,
                attributes: ['id', 'nickname'],
            }]
        })
        res.status(201).json(fullPost);
    } catch(e) {
        console.error(e);
        next(e);
    }
})


module.exports = router;