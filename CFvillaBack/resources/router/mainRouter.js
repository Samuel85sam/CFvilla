const postsRouter = require('./postsRouter')

const router = require('express').Router();
router.use('/posts',postsRouter)

module.exports = router