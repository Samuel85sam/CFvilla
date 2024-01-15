const User = require('./users.model')
const bcrypt = require('bcrypt')


const usersService = {

    create: async (data) => {
        console.log(`===> data dans service ${JSON.stringify(data)}`);//!LOG

            const user = new User(data);
            user.password =  await bcrypt.hash(data.password, 10);
            createdUser = await user.save();

            return user
    },

    readOneById: async (userId) => {

        try {
            return await User.findById(postId).exec();
        } catch (error) {
            console.log(`ERROR readOneById - User.findById FAIL: ${error}`)//!LOG;

        }
    },
    readAll: async () => {
        try {

            return await User.find({}).exec();
        } catch (error) {
            console.log(`ERROR readAll - User.find FAIL: ${error}`)//!LOG;

        }
    },
    updateOneById: async (data, userId) => {
        try {
            console.log(`usersService ===> userUpdated: userId =  ${userId}`)//!LOG;
            return await User.findByIdAndUpdate(
                userId
                , data);

        } catch (error) {
            console.log(`ERROR updateOne - user.updateOne FAIL: ${error}`)//!LOG;
        };
    },
    createPassword: async () => {
        try {
            const clearPword = req.body.data.password
        } catch (error) {

        }
    }
}

module.exports = usersService
