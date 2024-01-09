const mongoose = require('mongoose');
const { Schema } = mongoose;

const postSchema = new Schema({
    id: Number,
    title: String,
    author: String,
    body: String,
});

const Post = mongoose.model('Post',postSchema)

module.exports = Post
