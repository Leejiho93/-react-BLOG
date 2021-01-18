const express = require('express');
const multer = require('multer');
const router = express.Router();
const path = require('path');

const db = require('../models');
const { isLoggedIn, isPostExist } = require('./middleware');


const upload = multer({
    storage: multer.diskStorage({
        destination(req, file, done) {
            done(null, 'uploads');
        },
        filename(req, file, done) {
            const ext = path.extname(file.originalname);
            const basename = path.basename(file.originalname, ext);
            done(null, basename + new Date().valueOf() + ext);
        }
    }),
    limits: { fileSize: 20 * 1024 * 1024},
}) 


router.post('/', isLoggedIn, upload.none(), async(req, res, next) => {
    try {
        const newPost = await db.Post.create({
            title: req.body.title,
            content: req.body.content,
            UserId: req.user.id,
            category: req.body.category,
        })

        if (req.body.image) {
            if (Array.isArray(req.body.image)) {
                const images = await Promise.all(req.body.image.map((image) => {
                    return db.Image.create({ src: image });
                }));
                await newPost.addImages(images);
            }  else {
                const image = await db.Image.create({ src: req.body.image});
                await newPost.addImage(image);
            }   
        }

        const fullPost = await db.Post.findOne({
            where: { id: newPost.id },
            include: [{
                model: db.User,
                attributes: ['id', 'nickname'],
            }, {
                model: db.Image,
            }]
        })
        res.status(201).json(fullPost);
    } catch(e) {
        console.error(e);
        next(e);
    }
})

router.delete('/:id', async(req, res, next) => {
    try {
        const post = await db.Post.findOne({ where: { id: req.params.id }});
        if (!post) {
            return res.status(404).send('포스트가 존재하지 않습니다.');
        }
        await db.Post.destroy({ where: { id: req.params.id }});
        res.send(req.params.id);
    } catch(e) {
        console.error(e);
        next(e);
    }
})

router.post('/images', upload.array('image'), (req, res) => {
    res.json(req.files.map(v => v.filename));
})

router.get('/:id', async (req, res, next) => {
    try {
        const post = await db.Post.findOne({
            where: { id: req.params.id },
            include: [{
                model: db.User,
                attributes: ['id', 'nickname'],
            }, {
                model: db.Image,
            }, {
                model: db.Comment,
                include: [{
                    model: db.User,
                    attributes: ['id', 'nickname'],
                    order: [['createdAt', 'DESC']]
                }]
            }]
        })
        res.json(post);
    } catch (e) {
        console.error(e);
        next(e);
    }
})

// router.get('/:id/comments', isPostExist, async (req, res, next) => {
//     try {
//         const comments = await db.Comment.findAll({
//             where: {
//                 PostId: req.params.id,
//             },
//             order: [['createdAt', 'ASC']],
//             include: [{
//                 model: db.User,
//                 attributes: ['id', 'nickname'],
//             }]
//         })
//         return res.json(comments);
//     } catch(e) {
//         console.error(e);
//         return next(e);
//     }
// })

router.post('/:id/comment', isLoggedIn,  async (req, res, next) => {
    try {
        const post = await db.Post.findOne({ where: { id: req.params.id }});
        if (!post) {
            res.status(404).send('포스트가 존재하지 않습니다.');
        }
        // const post = await db.Post.findOne({ where: {id: req.params.id }});
        const newComment = await db.Comment.create({
            PostId: post.id,
            UserId: req.user.id,
            content: req.body.content,
        });
        await post.addComment(newComment.id);
        const comment = await db.Comment.findOne({
            where: {
                id: newComment.id,
            },
            include: [{
                model: db.User,
                attributes: ['id', 'nickname'],
            }]
        })
        res.json(comment);
    } catch (e) {
        console.error(e);
        return next(e);
    }
})

router.delete('/:id/comment', async(req, res, next) => {
    try {
        const post = await db.Post.findOne({ where: { id: req.params.id }});
        if (!post) {
            return res.status(404).send('포스트가 존재하지 않습니다.');
        };

        const comment = await db.Comment.findOne({ where: { id: req.query.commentId }});
        if (!comment) {
            return res.status(404).send('댓글이 존재하지 않습니다.');
        }

        await db.Comment.destroy({ where: { id: req.query.commentId }});
        res.json({ postId: req.params.id, commentId: req.query.commentId });
    } catch(e) {
        console.error(e);
        next(e);
    }
})

module.exports = router;