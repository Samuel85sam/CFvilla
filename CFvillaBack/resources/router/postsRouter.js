const postsController = require('../posts/posts.controller');
const postsRouter = require('express').Router();

postsRouter.route('/').post(postsController.post).all((res,req)=>{
    res.statusCode(405).send('request Unavalable')
});



module.exports = postsRouter;