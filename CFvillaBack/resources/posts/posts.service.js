const Post = require('./posts.model');


const postsService = {

    create: async (title, author, body) => {

        try {
            const post = new Post({
                title: title,
                author: author,
                body: body
            });

            await post.save();
            console.log(`===> post Saved in dataBase → ${post}`);//!LOG

            return post

        } catch (error) {
            console.log(`ERROR create - post.save FAIL: ${error}`)//!LOG;
        };
    },
    readOne: async (postTiltle, postAuthor) => {
        try {
            const post = await Post.findOne({
                title: postTiltle,
                author: postAuthor
            }).exec();
            return post

        } catch (error) {
            console.log(`ERROR  readOne - Post.findOne FAIL: ${error}`)//!LOG;
        }
    },
    readAll: async () => {
        try {
            const allPosts = [];
            allPosts = await Post.find({}).exec();
            return allPosts

        } catch (error) {
            console.log(`ERROR readAll - Post.find FAIL: ${error}`)//!LOG;
        }
    },
    updateOne: async (postTitle, postAuthor,updatedTitle,updatedType,updatedAutor,updatedBody) => {

        try {
            const updatedPost = await Post.updateOne({
                title: postTitle,
                author: postAuthor
            },{title: updatedTitle,
                type: updatedType,
                author: updatedAutor,
                body: updatedBody
            });

            return updatedPost

        } catch (error) {
            console.log(`ERROR updateOne - post.updateOne FAIL: ${error}`)//!LOG;
        };
    },
    updateByType: async (postType,updatedTitle,updatedType,updatedAutor,updatedBody) => {

        try {
            const updatedPosts = []
            updatedPosts = await Post.updateMany({
                title: postType,
            },{title: updatedTitle,
                type: updatedType,
                author: updatedAutor,
                body: updatedBody
            });

            return updatedPosts

        } catch (error) {
            console.log(`ERROR updateMany - post.updateMany FAIL: ${error}`)//!LOG;
        };
    },
    updateByAuthor: async (postAuthor,updatedTitle,updatedType,updatedAutor,updatedBody) => {

        try {
            const updatedPosts = []
            updatedPosts = await Post.updateMany({
                author: postAuthor,
            },{title: updatedTitle,
                type: updatedType,
                author: updatedAutor,
                body: updatedBody
            });

            return updatedPosts

        } catch (error) {
            console.log(`ERROR updateMany - post.updateMany FAIL: ${error}`)//!LOG;
        };
    },
    deleteOne: async (postTiltle, postAuthor) => {
        try {
            const post = await Post.deleteOne({
                title: postTiltle,
                author: postAuthor
            });
        } catch (error) {
            console.log(`ERROR  deleteOne - Post.deleteOne FAIL: ${error}`)//!LOG;
        }
    },
    deleteByAuthor: async (postTiltle, postAuthor) => {
        try {
            const post = await Post.deleteMany({
                author: postAuthor
            });
        } catch (error) {
            console.log(`ERROR  deleteMany - Post.deleteMany FAIL: ${error}`)//!LOG;
        }
    },
    deleteByType: async (typeSchema) => {
        try {
            const allPosts = [];
            allPosts = await Post.deleteMany({ type: typeSchema })

        } catch (error) {
            console.log(`ERROR deleteByType - Post.deleteMany FAIL: ${error}`)//!LOG;
        }
    },
}

module.exports = postsService