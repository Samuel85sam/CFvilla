const authService = require('./auth.service');
const usersService = require('../users/users.service');
const bcrypt = require('bcryptjs');
const authController = {
    login: async (req, res) => {
        const { userId, formPassword } = req.body;

        //* user check ↓↓↓
        const user = await usersService.readOneById(userId);
        console.log('user ===> ',user);
        if (user === null) {
            return res.status(401).json({ message: "USER NOT FOUND" });
        } else {

        //* passwordCheck ↓↓↓   
            const hashedPassword = user.password;
            const passwordMatch = await bcrypt.compare(formPassword, hashedPassword);
            if (!passwordMatch) {
                return res.status(401).json({ message: "Mot de passe incorrect" });
            };

        //* Token creation ↓↓↓    
            const token = await authService.newJwt(userId)
            if (token) {
                res.setHeader("Authorization", `Bearer ${token}`,);
                authService.addJwt(token,userId);
                console.log(`check header? Bearer : `, token);
                return res.status(200).json({ token, user });
            };
        };

    },

    checkin: async (req, res) => {
          //*Get Autorization
          const bearer = req.headers['authorization'];
          console.log(`bearer ===>`,bearer);
          const tokenDecoded = bearer && bearer.split(' ')[1];
          const secretKey = process.env.JWT_SECRET
          if (!tokenDecoded) {
            return res.status(401).json({ message: 'No token provided' });
          }
          const checkedToken = authService.verifyJwt(tokenDecoded,secretKey)
            if (!checkedToken) {
              return res.status(403).json({ message: 'Invalid token' });
            }
            console.log(`checkedJWT ====> `,checkedToken);
            if (checkedToken) {
                res.status(200).json(checkedToken)
                console.log(`====> JWT checked OK !!!`);
            }else{
                res.status(401)
                console.log(`====> unautorized !!!`);
            }
            return checkedToken
        }
}
module.exports = authController;