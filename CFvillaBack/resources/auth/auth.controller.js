const authService = require('./auth.service');
const usersService = require('../users/users.service');
const bcrypt = require('bcryptjs');
const authController = {

    login: async (req, res) => {
        const userId = await authService.exists('adressMail',req.body.adressMail);
        if (userId === null) {
            return res.status(401).json({ message: "USER NOT FOUND" });
        } else {
            const user = await usersService.readOneById(userId);
            const hashedPassword = user.password
            const passwordMatch = bcrypt.compare(req.body.formPassword, hashedPassword);
            if (!passwordMatch) {
                return res.status(401).json({ message: "Mot de passe incorrect" });
            };
   
            const token = await authService.newJwt(userId)
            if (token) {
                res.setHeader("Authorization", `Bearer ${token}`,);
                await authService.addJwt(userId, token);
                return res.status(200).json({ token });
            };
        };

    },

    checkin: async (req, res) => {
        const bearer = req.headers['authorization'];
        console.log('bearer ==> ', bearer);
        const tokenDecoded = bearer && bearer.split(' ')[1];
        const secretKey = process.env.JWT_SECRET
        response = await authService.verifyJwt(tokenDecoded, secretKey)
        console.log('response dans controller ==>', response);
        response ? res.status(200).json(response) : res.status(417).json(response)

    }

    //     if (bearer === undefined) {
    //         return res.status(401).json({ message: 'No token provided' });
    //     }
    //     const checkedToken = authService.verifyJwt(tokenDecoded, secretKey)
    //     if (!checkedToken) {
    //         return res.status(403).json({ message: 'Invalid token' });
    //     }
    //     if (checkedToken) {
    //         res.status(200)
    //         .json(req.currentUser)
    //         console.log(`====> JWT checked OK !!!`);
    //         return true
    //     } else {
    //         res.status(401)
    //         console.log(`====> unautorized !!!`);
    //     }
    // }
}
module.exports = authController;