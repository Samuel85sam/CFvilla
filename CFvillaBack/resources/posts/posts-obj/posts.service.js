const Post = require('./posts.model');
const postsService = {

    create: async (data) => {
        const post = new Post(data);
        const posted = await post.save();
        const param = {
            populate: [
                'img',
                'author'
            ]
        }
        const newPostId = post._id;

        await postsService.readOneById(newPostId, param);
        return newPostId
    },

    readAll: async (param) => {
        return await Post.find().populate(param.populate).exec()
        //return await Post.find().exec()
    },

    readOneById: async (postId, param) => {
        return await Post.findById(postId).exec();
    },

    updateOneById: async (postId, data) => {
        const updatedPost = await Post.findByIdAndUpdate(postId, data, { new: "true" });
        const param = {
            populate: [
                'img',
                'author'
            ]
        };

        await postsService.readOneById(postId, param);

        return updatedPost;
    },

    populateOneById: async (postId) => {
        const id = postId;
        let post = undefined;
        !id ? res.status(404).json({ message: "no postId to find to populate" }) : post = await Post.findOne({ _id: id })
            .populate('img')
            .populate('author')
            .exec();


        !post ? res.status(404).json({ message: "no post to populate" }) : console.log('values are populated  ==> ', post.img, ' + ', post.author);
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