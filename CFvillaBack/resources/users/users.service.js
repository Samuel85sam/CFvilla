const User = require('./users.model')


const usersService = {

    create: async (userData) => {

        console.log(`===> userData in  service → ${userData}`);//!LOG
        console.log(`===> userData in  stringed in service → ${JSON.stringify(userData)}`);//!LOG    

        try {
            const user = new User(userData);// !!! ← user data

            console.log(`===> user in trycatch service → ${user}`);//!LOG
            console.log(`===> user in trycatch stringed in service → ${JSON.stringify(user)}`);//!LOG

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
    },
    updateOneById: async (data,userId) => {
        try {
            console.log(`usersService ===> userUpdated: userId =  ${userId}`)//!LOG;
            return  await User.findByIdAndUpdate(
                userId
                , data);
                
        } catch (error) {
            console.log(`ERROR updateOne - user.updateOne FAIL: ${error}`)//!LOG;
        };
    },
}

module.exports = usersService
