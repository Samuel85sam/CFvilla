const usersController = require('../users/users.controller');
const usersRouter = require('express').Router();
const authMiddleware =require('../../middlewares/auth.middleware');
const accessControl = require('../../middlewares/access-control.middleware');
const logMiddleware = require('../../middlewares/log.middleware');


usersRouter.route('/')
    .post(usersController.post)
    .get(authMiddleware(),accessControl(),usersController.getAll)
    .all((req,res) => { res.statusCode(405).send('request Unavalable') }
    );

usersRouter.route('/:id')
    .get(usersController.getOneById)
    .delete(authMiddleware(),accessControl(),usersController.deleteOneById)
    .patch(authMiddleware(),accessControl(),usersController.updateOneById)
    .all((req,res) => { res.statusCode(405).send('request Unavalable') }
    );

module.exports = usersRouter;