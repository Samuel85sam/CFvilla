const mongoose = require('mongoose');
const { Schema } = mongoose;
const imgSchema = new Schema({
    originalFileName: String,
    type: String,
    fileName: String,
    path:String,
    size: Number
});
const Img = mongoose.model('Img', imgSchema);
module.exports = Img;
