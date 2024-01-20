const postsController = require('../posts/obj.posts/posts.controller');
const postsRouter = require('express').Router();
const accessControl = require('../../middlewares/access-control.middleware');
const logMiddleware = require('../../middlewares/log.middleware');
const authMiddleware =require('../../middlewares/auth.middleware');

postsRouter.route('/')
    .post(authMiddleware(),accessControl(),postsController.post)
    .get(postsController.getAll)
    .delete(authMiddleware(),accessControl(),postsController.deleteAll)
    .patch(authMiddleware(),accessControl(),postsController.populateOne)
    .all((req,res) => { res.statusCode(405).send('request Unavalable') }
    );

postsRouter.route('/:id')
    .get(postsController.getOneById)
    .delete(authMiddleware(),accessControl(),postsController.deleteOneById)
    .patch(authMiddleware(),accessControl(),postsController.updateOneById)
    .all((req,res) => { res.statusCode(405).send('request Unavalable') }
    );

postsRouter.route('/patch/:id')
    

module.exports = postsRouter;