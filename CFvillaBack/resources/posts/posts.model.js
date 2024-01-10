const mongoose = require('mongoose');
const { Schema } = mongoose;

const postSchema = new Schema({
    id: Number,
    type: String,
    title: String,
    author: String,
    body: String,
});

const Post = mongoose.model('Post',postSchema)

module.exports = Post
