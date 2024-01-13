const usersController = require('../users/users.controller');
const usersRouter = require('express').Router();

usersRouter.route('/').post(usersController.post).get(usersController.getAll).all((res,req)=> {
    res.statusCode(405).send('request Unavalable')
});

usersRouter.route('/:id').get(usersController.getOneById).delete(usersController.deleteOneById).all((res,req)=>{
    res.statusCode(405).send('request Unavalable')
});

module.exports = usersRouter;