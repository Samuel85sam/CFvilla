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
    
    addJwt: async (token, userId) => {
        userService.updateOneById(token, userId)
        return true;
    },

    // checkJwt: async(req, res, next) => {
    //     const authHeader = req.headers['authorization'];
    //     const tokenDecoded = authHeader && authHeader.split(' ')[1];
    //     //const secretKey = process.env.JWT_SECRET
    //     if (!tokenDecoded) {
    //       return res.status(401).json({ message: 'No token provided' });
    //     }
    //     const token = this.verifyJwt(tokenDecoded)
    //       if (err) {
    //         return res.status(403).json({ message: 'Invalid token' });
    //       }
    //    return token
    // }
}
module.exports = authService