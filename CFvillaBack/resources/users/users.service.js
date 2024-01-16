const User = require('./users.model')
const bcrypt = require('bcryptjs')
const usersService = {
        create: async (data) => {
                const user = new User(data);
                user.password = await bcrypt.hash(data.password, 10);
                createdUser = await user.save();
                return user
        },
        readOneById: async (userId) => {
                return await User.findById(userId).exec();
        },
        readAll: async () => {
                return await User.find({}).exec();
        },
        updateOneById: async (userId,token) => {
                console.log('user id ===>',userId);
                console.log('token ===>',token);
                return await User.findByIdAndUpdate(userId,{ jwt: token});
        }
}
module.exports = usersService
