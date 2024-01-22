const mongoose = require('mongoose');
const { Schema } = mongoose;
const postSchema = new Schema({
    type: String,
    title: String,
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    body: String,
    img: { type: mongoose.Types.ObjectId, ref: 'Img' }
});
const Post = mongoose.model('Post', postSchema);
module.exports = Post;


//Validator
// check types (enum)
//required
//relation (foreign key) user >< author 


