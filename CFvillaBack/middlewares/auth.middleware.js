const User = require('../resources/users/users.model');

const authMiddleware = () => {
    return async (req, res, next) => {
        try {
            const bearer = req.headers['authorization'];
            if (!bearer) {
                return res.status(401).json({ error: 'No bearer' });
            }

            const tokenDecoded = bearer.split(' ')[1];
            req.currentUser = await User.exists({ jwt: tokenDecoded })
            next();
        } catch (error) {
            console.error('Error in authMiddleware:', error);
            return res.status(500).json({ error: 'Internal Server Error' });
        }
    };
};

module.exports = authMiddleware;

