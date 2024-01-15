const usersService = require('./users.service')
const usersController = {
    post: async (req, res) => {
             const userData = req.body
             const createdUser = await usersService.create(userData)
            if (createdUser) {
                res.status(201)
                    .json(createdUser)
                    console.log(`userController ===> createdUser stringed =  ${JSON.stringify(createdUser)}`)//!LOG;
            };
    },
    getOneById: async (req, res) => {
        try {
            const id = req.params.id;
            const post = await postsService.readOne(id)
            if (post) {
                res.status(200)
                    .json(post)
            } else {
                console.log(`post not found`)//!LOG;
                res.status(404)
            }
        } catch (error) {
            console.log(`ERROR controller querry FAILED ${error}`)//!LOG;
        };
    },
    getAll: async (req, res) => {
        try {
            const allUsers = await usersService.readAll();
            if (allUsers) {
                res.status(200).json(allUsers)
            } else {
                console.log(`no user found`)//!LOG;
                res.status(404)
            }
        } catch (error) {
            console.log(`ERROR controller querry FAILED ${error}`)//!LOG;
        };
    },
    updateOneById: async (req, res) => {
        try {
            console.log(`user id ===> ${JSON.stringify(req.params.id)}`)//!LOG;
            console.log(`patch req ===> ${JSON.stringify(req.body)}`)//!LOG;
            const id = req.params.id;
            const updatedData = req.body;
            const userUpdated = await usersService.updateOneById(id, updatedData)
            if (userUpdated) {
                res.status(200).json(userUpdated)
            } else {
                console.log(`user not found`)//!LOG;
                res.status(404)
            }
        } catch (error) {
            console.log(`ERROR controller querry FAILED ${error}`)//!LOG;
        };
    },
    deleteOneById: async (req, res) => {
        try {
            console.log(`req.params ===> ${JSON.stringify(req.params)}`)//!LOG;
            const id = req.params.id;
            console.log(`req.params.id ===> ${JSON.stringify(req.params.id)}`)//!LOG;
            console.log(`user deleted ===> ${JSON.stringify(deletedUser)}`)//!LOG;
            if (deletedUser) {
                const deletedUser = await usersService.deleteOne(id)
                res.status(200)
                    .json(deletedUser)
            } else {
                console.log(`user not found(controller)`)//!LOG;
                res.status(404)
            };
        } catch (error) {
            console.log(`ERROR controller querry FAILED ${error}`)//!LOG;
        };
    },

}

module.exports = usersController