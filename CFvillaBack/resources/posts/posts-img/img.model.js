const mongoose = require('mongoose');
const { Schema } = mongoose;
const imgSchema = new Schema({
    originalname: String,
    type: String,
    fileName: String,
    path:String,
    size: Number
});
// const imgSchema = new Schema({
//     name: String,
//     size: Number,
//     type: String
// });
const Img = mongoose.model('Img', imgSchema);
module.exports = Img;
