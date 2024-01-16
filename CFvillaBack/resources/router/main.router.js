const postsRouter = require('./posts.router')
const usersRouter = require('./users.router')
const authRouter = require('./auth.router')
const imgsRouter = require('./img.router')

const router = require('express').Router();
router.use('/posts', postsRouter);
router.use('/users', usersRouter);
router.use('/auth', authRouter);
router.use('/imgs', imgsRouter);


module.exports = router