const postsController = require('../posts/posts.controller');
const postsRouter = require('express').Router();
const accessControl = require('../../middlewares/access-control.middleware');
const logMiddleware = require('../../middlewares/log.middleware');
const authMiddleware =require('../../middlewares/auth.middleware');

postsRouter.route('/')
    .post(authMiddleware(),accessControl(),postsController.post)
    .get(postsController.getAll)
    .all((res, req) => { res.statusCode(405).send('request Unavalable') }
    );

postsRouter.route('/:id')
    .get(postsController.getOneById)
    .delete(authMiddleware,accessControl(),postsController.deleteOneById)
    .patch(authMiddleware,accessControl(),postsController.updateOneById)
    .all((res, req) => { res.statusCode(405).send('request Unavalable') }
    );

module.exports = postsRouter;