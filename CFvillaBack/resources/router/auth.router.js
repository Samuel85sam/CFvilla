const authController = require('../auth/auth.controller');
const authRouter = require('express').Router();
const logMiddleware = require('../../middlewares/log.middleware');

authRouter.route('/')
    .post(authController.login)
    .get(authController.checkin)
    .all((res, req) => { res.statusCode(405).send('request Unavalable') }
    );
module.exports = authRouter;
