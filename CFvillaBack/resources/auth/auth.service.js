const jwt = require("jsonwebtoken");
const User = require('../users/users.model');
const userService = require("../users/users.service");
const authService = {

    exists: async (field, data) => {
        
        return await User.exists({ [field]: data }); //  [field] pour utiliser la valeur dynamique de field :)
    },

    newJwt: async (userId) => {
        const payload = { data: userId, };
        const secret = process.env.JWT_SECRET;
        const options = { expiresIn: "2d" };
        return jwt.sign(payload, secret, options);
    },

    verifyJwt: async (token) => {

        try {
            const secret = process.env.JWT_SECRET;
            response = jwt.verify(token, secret)
            return response
        } catch (error) {
            res.status(422).json('unprocessable entity', error)
        }

    },

    addJwt: async (userId, token) => {

        const data = { jwt: token };
        await userService.updateOneById(userId, data)
        return true;
    },
}
module.exports = authService