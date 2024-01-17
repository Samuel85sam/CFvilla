const User = require('../resources/users/users.model')

const authMiddleware = () => {

    return  authentificator = async  (req, res, next) => {
        console.log('req ran by authMiddleware ');
        const bearer = req.headers['authorization'];
        const tokenDecoded = bearer && bearer.split(' ')[1];
        req.currentUser = await User.findOne({ jwt: `${tokenDecoded}` }).exec();
        next()
    }

}

module.exports = authMiddleware