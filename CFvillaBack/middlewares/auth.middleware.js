const User = require('../resources/users/users.model')

const authMiddleware = () => {
    return async (req, res, next) => {
        console.log('req ran by authMiddleware ');
        const bearer = await req.headers['authorization'];
        const tokenDecoded = bearer && bearer.split(' ')[1];
        console.log('tokenDecoded =>', tokenDecoded);
        if (!tokenDecoded) {
            res.status(401)
                .send({ error: 'unauthorized' })
            console.error('!!! unauthorized !!!');
            next('unauthorized')
        } else {
            req.currentUser = await User.findOne({ jwt: `${tokenDecoded}` }).exec();
            console.log('current user ===>', currentUser);
            next();
        }
    };

};

module.exports = authMiddleware;