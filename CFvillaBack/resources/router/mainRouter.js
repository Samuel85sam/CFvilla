const postsRouter = require('./postsRouter')
const usersRouter = require('./usersRouter')

const router = require('express').Router();
router.use('/posts',postsRouter);
router.use('/users',usersRouter)

module.exports = router