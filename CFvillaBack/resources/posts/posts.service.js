const Post = require('./posts.model');


const postsService = {

    create: async (title,author,body) => {

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
        console.log(`ERROR postMeteoDay.save FAIL: ${error}`)//!LOG;
    }

    },

}

module.exports = postsService