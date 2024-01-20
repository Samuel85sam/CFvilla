const Img = require('./img.model')
const imgService = {

    create: async (data) => {
        const img = new Img(data);
        return await img.save();
    },

    readAll: async () => {
        return await Img.find({}).exec();
},

    readOneById: async (imgId) => {
        return await Img.findById(imgId).exec();
    },

    deleteOne: async (imgId) => {
        console.log('deleAll-imgService');

        return await Img.findByIdAndDelete(imgId);
    },

    deleteAll: async () => {
        return await Img.deleteMany();
    },
}

module.exports = imgService