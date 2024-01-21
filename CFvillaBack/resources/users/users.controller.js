const usersValidator = require('./users.validator');
const usersService = require('./users.service');

const usersController = {

    post: async (req, res) => {

        const reqData = req.body;
        let userData =  undefined;
        let newUserId = undefined;

        !reqData? res.status(404).json({ message: 'user creation failure' }) : userData = await usersValidator.validate(reqData);
        
        !userData? res.status(404).json({message: 'userValidation  failure'}) : newUserId = await usersService.create(userData);

        !newUserId? res.status(500).json({message: 'userService.create cb failure'}) : res.status(201).json({ 
            message: 'new User created and stored in database',
            newUserId: `${newUserId}` });
        
    },

    getOneById: async (req, res) => {
        const id = req.params.id;
        const user = await usersService.readOneById(id)
        const validatedUser = userValidator.validate(user)
        console.log('validatedUser from db ===> ',validatedUser);
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
        console.log(allUsers);
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
        const cb = await usersService.updateOneById(id, updatedData)
        if (!cb) {
            console.log(`no call-back`)//!LOG;
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

}

module.exports = usersController