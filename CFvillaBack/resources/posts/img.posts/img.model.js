const mongoose = require('mongoose');
const { Schema } = mongoose;
const imgSchema = new Schema({
    fileName: String,
    originalFileName: String,
    size: Number
});
const Img = mongoose.model('Img', imgSchema);
module.exports = Img;
