//const db = require("mongoose");
const jwt = require("jsonwebtoken");
const userService = require("../users/users.service")
const authService = {
    newJwt: async (userId) => {
        const payload = { data: userId, };
        const secret = process.env.JWT_SECRET;
        const options = { expiresIn: "2d" };
        return jwt.sign(payload, secret, options);
    },

    verifyJwt: async (token) => {

        try {
            const secret = process.env.JWT_SECRET;
        response =  jwt.verify(token, secret)
        console.log('response dans service ==>',response)
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