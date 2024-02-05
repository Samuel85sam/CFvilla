const Img = require('./img.model')
const imgService = {

    create: async (data) => {
        const img = new Img(data);
        const createdImg =  await img.save();
        console.log({createdImg});
        return img.id
    },

    readAll: async () => {
        return await Img.find({}).exec();
},

    readOneById: async (imgId) => {
        return await Img.findById(imgId).exec();
    },

    deleteOne: async (imgId) => {

        return await Img.findByIdAndDelete(imgId);
    },

    deleteAll: async () => {
        return await Img.deleteMany();
    },
}

module.exports = imgService