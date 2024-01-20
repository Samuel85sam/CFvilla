const Post = require('./posts.model');
const postsService = {

    create: async (data) => {
        const post = new Post(data);
        console.log('post dans service ==>',post);

        return await post.save();
    },

    readOneById: async (postId) => {
        return await Post.findById(postId).exec();
    },

    updateOneById: async (postId, data) => {
        return await Post.findByIdAndUpdate(postId, data);
    },

    populateOneById: async ({ postId }) => {
        const id = JSON.stringify({ postId });
        !id ? res.status(404).json({ message: "no postId to find to populate" }) : async (id) => {
            const post = await Post.findOne({ _id: id })
                .populate('img')
                .populate('author')
                .exec();

                console.log('post populated ==> ', post);

            !post ? res.status(404).json({ message: "no post to populate" }) : console.log('populated values', post.img, ' + ', post.author);
            res.status(200).json({ post })
            return true
        }
    },

    deleteOne: async (postId) => {
        return await Post.findByIdAndDelete(postId);
    },

    deleteAll: async () => {
        return await Post.deleteMany();
    },

}

module.exports = postsService