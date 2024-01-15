const usersService = require('./users.service')
const usersController = {
    post: async (req, res) => {
        const userData = req.body
        const createdUser = await usersService.create(userData)
        if (createdUser) {
            res.status(201)
                .json(createdUser)
        };
    },

    getOneById: async (req, res) => {
        const id = req.params.id;
        const user = await usersService.readOne(id)
        if (user) {
            res.status(200)
                .json(user)
        } else {
            console.log(`user not found`)//!LOG;
            res.status(404)
        }
    },

    getAll: async (req, res) => {
        const allUsers = await usersService.readAll();
        if (allUsers) {
            res.status(200).json(allUsers)
        } else {
            console.log(`no user found`)//!LOG;
            res.status(404)
        }
    },

    updateOneById: async (req, res) => {
        const id = req.params.id;
        const updatedData = req.body;
        const userUpdated = await usersService.updateOneById(id, updatedData)
        if (userUpdated) {
            res.status(200).json(userUpdated)
        } else {
            console.log(`user not found`)//!LOG;
            res.status(404)
        }
    },

    deleteOneById: async (req, res) => {
        const id = req.params.id;
        if (deletedUser) {
            const deletedUser = await usersService.deleteOne(id)
            res.status(200)
                .json(deletedUser)
        } else {
            console.log(`user not found(controller)`)//!LOG;
            res.status(404)
        };
    },

}

module.exports = usersController