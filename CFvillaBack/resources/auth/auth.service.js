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
        const secret = process.env.JWT_SECRET;
        return jwt.verify(token, secret)
    },
    
    addJwt: async ( userId,token) => {
        await userService.updateOneById(userId,token)
        return true;
    },
}
module.exports = authService