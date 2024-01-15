//const db = require("mongoose");
const jwt = require("jsonwebtoken");
const userService= require("../users/users.service")

const authService = {
    newJwt: async (userData) => {
        try {
            const payload = {
                firstName: String,
                lastName: String
            };
            const secret = process.env.JWT_SECRET;
            const options ={
                expireIn: "2d"
            };
            const token = jwt.sign(payload, secret, options);
            if (token){

                return token
            }
        } catch (error) {
                        console.error(`Token generation ERROR ===> ${error}`);//! LOG
                        console.error(`Token generation ERROR stringed===> ${JSON.stringify(error)}`);//! LOG

        }
    },
    verifyJwt: async (token) =>{
        const secret = process.env.JWT_SECRET;
        try {
            return jwt.verify(token,secret)
        } catch (error) {
            console.log(`====> Verification Token FAIL!!!!!!!!!!!!!!!!! ===> ERROR: ${err}`);//!LOG
        }

    },
    addJwt: async (token,id) => {
        userService.updateOneById(token,userId)
        console.log(`authService ===> jwtUdated: userId =  ${id}`)//!LOG;
        return true;
    }
}

module.exports = authService