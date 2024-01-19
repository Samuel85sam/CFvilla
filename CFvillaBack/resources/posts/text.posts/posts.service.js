const Post = require('./posts.model');
const postsService = {

    create: async (data) => {
        const post = new Post(data);
        return await post.save();
    },

    readOneById: async (postId) => {
        return await Post.findById(postId).exec();
    },

    updateOneById: async (postId, data) => {
        return await Post.findByIdAndUpdate(postId, data);
    },

    deleteOne: async (postId) => {
        return await Post.findByIdAndDelete(postId);
    },

    deleteAll: async () => {
        return await Post.deleteMany();
    },

}

module.exports = postsService