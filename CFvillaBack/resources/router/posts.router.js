const postsController = require('../posts/posts.controller');
const postsRouter = require('express').Router();

postsRouter.route('/')
.post(postsController.post)
.get(postsController.getAll)
.all((res,req)=>{res.statusCode(405)
.send('request Unavalable')});

postsRouter.route('/:id')
.get(postsController.getOneById)
.delete(postsController.deleteOneById)
.patch(postsController.updateOneById)
.all((res,req)=>{res.statusCode(405).send('request Unavalable')});

module.exports = postsRouter;