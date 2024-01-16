const Post = require('./posts.model');
const postsService = {

    create: async (data) => {
        const post = new Post(data);
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