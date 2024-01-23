const User = require('./users.model')
const bcrypt = require('bcryptjs')

const usersService = {

        create: async (data) => {
                const user = new User(data);
                user.password = await bcrypt.hash(data.password, 10);
                createdUser = await user.save();
                return user._id
        },

        readOne: async (fieldData) => {
                return await User.findOne(fieldData).exec();
        },

        readOneById: async (userId) => {
                return await User.findById(userId).exec();
        },

        readAll: async () => {
                return await User.find({}).exec();
        },

        updateOneById: async (id, data) => {
                try {
                        const updated = await User.findByIdAndUpdate(id, data, { new: true });
                        return updated;
                } catch (error) {
                        console.error(error);
                }

        },

        deleteOne: async (userId) => {
                return await User.findByIdAndDelete(userId);
        },

        deleteAll: async () => {
                return await User.deleteMany();
        }
}

module.exports = usersService
