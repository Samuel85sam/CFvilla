const User = require('./users.model')


const userService = {

    
    create: async (userData) => {

        try {
            const user = new User({
              
            });

            await post.save();
            console.log(`===> post Saved in dataBase → ${post}`);//!LOG

            return post

        } catch (error) {
            console.log(`ERROR create - post.save FAIL: ${error}`)//!LOG;
        };
    },
}
