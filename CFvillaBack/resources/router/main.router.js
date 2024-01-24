const postsRouter = require('./posts.router')
const usersRouter = require('./users.router')
const authRouter = require('./auth.router')
const imgsRouter = require('./imgs.router')
const logMiddleware = require('../../middlewares/log.middleware');



const router = require('express').Router();
router.use('/posts', postsRouter);
router.use('/users', usersRouter);
router.use('/auth', authRouter);
router.use('/imgs',imgsRouter);



module.exports = router