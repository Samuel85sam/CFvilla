const authController = require('../auth/auth.controller');
const authRouter = require('express').Router();

authRouter.route('/')
.post(authController.login)
.all((res,req)=>{res.statusCode(405)
.send('request Unavalable')});

module.exports = authRouter;
