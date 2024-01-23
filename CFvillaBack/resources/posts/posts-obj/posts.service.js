const Post = require('./posts.model');
const postsService = {

    create: async (data) => {
        const post = new Post(data);
        posted = await post.save();
        console.log('posted===>',posted);
        const newPostId = post._id;
        console.log('newPostId ==> ', newPostId);
        return newPostId
    },

    readAll: async () => {
        return await Post.find().exec()
    },

    readOneById: async (postId) => {
        return await Post.findById(postId).exec();
    },

    updateOneById: async (postId, data) => {
        const updatedPost = await Post.findByIdAndUpdate(postId, data);
        return updatedPost;
    },

    populateOneById: async (postId) => {
        const id = postId;
        let post = undefined;
        !id ? res.status(404).json({ message: "no postId to find to populate" }) : post = await Post.findOne({ _id: id })
            .populate('img')
            .populate('author')
            .exec();

        console.log('post populated ==> ', post);

        !post ? res.status(404).json({ message: "no post to populate" }) : console.log('populated values', post.img, ' + ', post.author);
        return [post.img, post.author]
    },

    deleteOne: async (postId) => {
        return await Post.findByIdAndDelete(postId);
    },

    deleteAll: async () => {
        return await Post.deleteMany();
    },

}

module.exports = postsService