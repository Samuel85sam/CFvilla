const postsController = require('../posts/posts.controller');
const postsRouter = require('express').Router();

postsRouter.route('/').post(postsController.post).get(postsController.getAll).delete(postsController.deleteByAuthor).all((res,req)=>{
    res.statusCode(405).send('request Unavalable')
});

postsRouter.route('/:id').get(postsController.getOneById).delete(postsController.deleteOneById).all((res,req)=>{
    res.statusCode(405).send('request Unavalable')
});




module.exports = postsRouter;