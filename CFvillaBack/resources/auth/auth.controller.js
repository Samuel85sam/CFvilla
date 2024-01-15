const authService = require('./auth.service');
const usersService = require('../users/users.service');
const bcrypt = require('bcrypt');
const authController = {
    login: async (req, res) => {
        const { userId, formPassword } = req.body;

        //* user check ↓↓↓
        const user = await usersService.readOneById(userId);
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
                console.log(`check header? Bearer : `, token);
                return res.status(200).json({ token, user });
            };
        };

    }
}
module.exports = authController;