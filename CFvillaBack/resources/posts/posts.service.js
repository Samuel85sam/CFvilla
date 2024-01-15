const Post = require('./posts.model');
const postsService = {

    create: async (type, title, author, body) => {
        const post = new Post({
            type: type,
            title: title,
            author: author,
            body: body
        });
        return await post.save();
    },

    readOne: async (postId) => {
        return await Post.findById(postId).exec();
    },

    readAll: async () => {
        return await Post.find({}).exec();
    },

    updateOneById: async (postId, data) => {
        return await Post.findByIdAndUpdate(postId, data);
    },

    deleteOne: async (postId) => {
        return await Post.findByIdAndDelete(postId);
    },
}
module.exports = postsService