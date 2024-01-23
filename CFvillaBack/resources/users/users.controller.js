const usersValidator = require('./users.validator');
const usersService = require('./users.service');

const usersController = {

    create: async (req, res) => {
        try {
            const userData = req.body;;
            const newUserId = await usersService.create(userData);
            res.status(201).json({
                message: 'new User created and stored in database',
                newUserId: `${newUserId}`
            });
        } catch (error) {
            res.status(500).json({
                message: 'userService.create cb failure',
                error: error
            })
        }
    },

    getOneById: async (req, res) => {
        const id = req.params.id;
        const user = await usersService.readOneById(id)
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
        const data = req.body;
        const cb = await usersService.updateOneById(id, data)
        if (!cb) {
            console.log(`no user for this id`)//!LOG;
            res.status(404)
        }
        res.status(200).json(cb)

    },

    deleteOneById: async (req, res) => {
        const userId = req.params.id;
        const cb = await usersService.deleteOne(userId)
        if (cb) {
            res.status(200)
                .json(cb)

        } else {
            console.log(`user not found(controller)`)//!LOG;
            res.status(404)
        };
    },

    deleteAll: async (req, res) => {
        try {
            const cb = await usersService.deleteAll()
            res.status(200).json(cb)
        } catch (error) {
            console.log(error);//!LOG
        };

    }

}

module.exports = usersController