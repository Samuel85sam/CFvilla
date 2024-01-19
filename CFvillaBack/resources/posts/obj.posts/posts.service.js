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

    // checkPopulatedById : async (postId, fieldName) => {
    //     const resFieldName = await Post.findOne({ _id: postId }).populate(fieldName, '_id').exec();
    //     console.log(resFieldName); 
    // },
     transformOneById : async (postId,fieldName,data) => {
        const post = await Post.findById({_id: postId}).populate([{
            path: fieldName,
            transform: (post, postId)}]);//! → pas s^r de comprendre le but de "populate"
     },

    deleteOne: async (postId) => {
        return await Post.findByIdAndDelete(postId);
    },

    deleteAll: async () => {
        return await Post.deleteMany();
    },

}

module.exports = postsService