const Img = require('./img.model')

const imgService = {
    post: async (data) => {
        const img = new Img(data);
        return await img.save();
    },

    readOne: async (imgId) => {
        return await Img.findById(imgId).exec();
    },

    deleteOne: async (imgId) => {
        return await Img.findByIdAndDelete(imgId);
    },
}


module.exports = imgService