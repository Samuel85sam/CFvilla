const User = require('./users.model')


const usersService = {

    create: async (userData) => {

        try {
            const user = new User(
              userData
            );

            await user.save();
            console.log(`===> user Saved in dataBase → ${user}`);//!LOG

            return user

        } catch (error) {
            console.log(`ERROR create - user.save FAIL: ${error}`)//!LOG;
        };
    },

    readOneById: async (userId) =>{

        try{
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
    }
}

module.exports = usersService
