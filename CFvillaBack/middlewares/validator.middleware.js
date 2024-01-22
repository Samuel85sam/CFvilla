const userValidator = require('../resources/users/users.validator');
const imgValidator = require('../resources/posts/posts-img/img.validator');
const postsValidator = require('../resources/posts/posts-obj/posts.validator');

const validatorMiddleware = (validationSchema) => {
    try {
        return async (req, res, next) => {
            const data = req.body;
            const validator = validationSchema
            const postData = await validator.validate(data);
            console.log('OK => schema validated',postData);
            next();
        };
    } catch (error) {
        res.status(422).json({message:"unprocessable entity"});
        next('validation failed <== !!!');
    };
};

module.exports = validatorMiddleware;