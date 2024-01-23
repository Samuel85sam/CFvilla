const usersController = require('../users/users.controller');
const usersValidator = require('../users/users.validator');
const usersRouter = require('express').Router();
const authMiddleware = require('../../middlewares/auth.middleware');
const accessControl = require('../../middlewares/access-control.middleware');
const validator = require('../../middlewares/validator.middleware')
const logMiddleware = require('../../middlewares/log.middleware');


usersRouter.route('/')
    .post(validator(usersValidator), usersController.create)
    .get(authMiddleware(), accessControl(), usersController.getAll)
    .delete(usersController.deleteAll)
    .all((req, res) => { res.statusCode(405).send('request Unavalable') }
    );

usersRouter.route('/:id')
    .get(usersController.getOneById)
    .delete(authMiddleware(), accessControl(), usersController.deleteOneById)
    .patch(authMiddleware(), accessControl(), usersController.updateOneById)
    .all((req, res) => { res.statusCode(405).send('request Unavalable') }
    );

module.exports = usersRouter;