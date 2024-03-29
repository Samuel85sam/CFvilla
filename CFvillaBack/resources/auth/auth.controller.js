//const axios = require('axios')
const authService = require('./auth.service');
const usersService = require('../users/users.service');
const bcrypt = require('bcryptjs');
const authController = {

    login: async (req, res) => {
        console.log('req.body : ', req.body);
        const {_id: userId} = await authService.exists('adressMail', req.body.adressMail);
        if (userId === null) {
            return res.status(401).json({ message: "USER NOT FOUND" });
        } else {
            const user = await usersService.readOneById(userId);
            const hashedPassword = user.password
            const passwordMatch =await bcrypt.compare(req.body.password, hashedPassword);
            console.log({passwordMatch});
            const token = await authService.newJwt(userId)
            if (passwordMatch === false) {
                return res.status(401).json({ message: "Mot de passe incorrect" });
            };
            if (token) {
                res.setHeader("Authorization", `Bearer ${token}`,);
              
                await authService.addJwt(userId, token);
                return res.status(200)
                    .json({
                        jwt: token,
                        id: userId.toString()
                    });
            };
        };

    },

    checkin: async (req, res) => {
        const bearer = req.headers['authorization'];
        const tokenDecoded = bearer && bearer.split(' ')[1];
        const secretKey = process.env.JWT_SECRET
        response = await authService.verifyJwt(tokenDecoded, secretKey)
        response ? res.status(200).json(response) : res.status(417).json(response)

    }

}
module.exports = authController;