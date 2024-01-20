const mongoose = require('mongoose');
const { Schema } = mongoose;
const imgSchema = new Schema({
    fileName: String,
    originalFileName: String,
    type: String,
    size: Number
});
module.exports.imgShema = imgSchema;
module.exports.Img = mongoose.model('Img', imgSchema);
