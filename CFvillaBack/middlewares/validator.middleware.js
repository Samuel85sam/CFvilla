const userValidator = require('../resources/users/users.validator');
const imgValidator = require('../resources/posts/posts-img/img.validator');
const postsValidator = require('../resources/posts/posts-obj/posts.validator');

const validatorMiddleware = (validator) => {
    try {
        return async (req, res, next) => {
            const data = req.body;
            const validatedData = await validator.validate(data);
            next()
        };
    } catch (error) {
        res.status(422).json({ message: "unprocessable entity" });
        next('validation failed <== !!!');
    };
};

module.exports = validatorMiddleware;