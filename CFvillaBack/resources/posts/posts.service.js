const Post = require('./posts.model');


const postsService = {

    create: async (type, title, author, body) => {

        try {
            const post = new Post({
                type: type,
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
    readOne: async (postId) => {
        try {
            return  await Post.findById(postId).exec();
        } catch (error) {
            console.log(`ERROR ===> ${error}`)//!LOG;
        }
    },
    readAll: async () => {
        try {
            return  await Post.find({}).exec();
        } catch (error) {
            console.log(`ERROR readAll - Post.find FAIL: ${error}`)//!LOG;
        }
    },
    updateOne: async (postId,updatedTitle,updatedType,updatedAutor,updatedBody) => {

        try {
            const updatedPost = await Post.updateOne({
               id: postId
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
    deleteOne:  async (postId)  => {
        try {
            //console.log(`post deleted ===> ${post}`)//!LOG;
            return  await Post.findByIdAndDelete(postId);
        } catch (error) {
            console.log(`ERROR  deleteOne - Post.deleteOne FAIL: ${error}`)//!LOG;
        }
    },
    deleteByAuthor: async (postAuthor) => {
        try {
            console.log(`postAuthor(service) ===> ${postAuthor}`)//!LOG;
            return await Post.deleteMany({author: postAuthor});
        } catch (error) {
            console.log(`ERROR  deleteMany - Post.deleteMany FAIL: ${error}`)//!LOG;
        }
    },
    // deleteByType: async (typeSchema) => {
    //     try {
    //         return await Post.deleteMany({ type: typeSchema })
    //     } catch (error) {
    //         console.log(`ERROR deleteByType - Post.deleteMany FAIL: ${error}`)//!LOG;
    //     }
    // },
}

module.exports = postsService