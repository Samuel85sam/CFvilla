const postsRouter = require('./posts.router')
const usersRouter = require('./users.router')
const authRouter = require('./auth.router')

const router = require('express').Router();
router.use('/posts',postsRouter);
router.use('/users',usersRouter);
router.use('/auth',authRouter);


module.exports = router