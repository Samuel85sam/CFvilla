const postsService = require('./posts.service')

const postsController = {

    post: async (req, res) => {
        const postData = req.body
        const postedData = await postsService.create(postData)
        if (postedData) {
            res.status(201)
                .json(postedData)
        }
    },

    getOneById: async (req, res) => {
        id = req.params.id;
        const post = await postsService.readOneById(id)
        if (post) {
            res.status(200)
                .json(post)
        } else {
            console.log(`post not found`)//!LOG;
            res.status(404)
        }
    },

    getAll: async (req, res) => {
        const allPosts = await postsService.readAll();
        if (allPosts) {
            res.status(200).json(allPosts)
        } else {
            console.log(`no post found`)//!LOG;
            res.status(404)
        }
    },

    updateOneById: async (req, res) => {
        const id = req.params.id;
        const updatedData = req.body;
        const postUpdated = await postsService.updateOneById(id, updatedData)
        if (postUpdated) {
            res.status(200).json(postUpdated)
        } else {
            console.log(`post not found`)//!LOG;
            res.status(404)
        }
    },

    populateOneById: async (req, res) => {   const postId = req.params;
        const fieldName = req.body.fieldName;
        const {data} = req.body.data;
        const populated = await postsService.checkPopulatedById(postId);

        return populated? postsService.populateOneById(postId, fieldName,data) : res.status(404) 
    },

    deleteOneById: async (req, res) => {
        const id = req.params.id;
        const deletedPost = await postsService.deleteOne(id)
        console.log(`post deleted ===> ${JSON.stringify(deletedPost)}`)//!LOG;
        if (deletedPost) {
            res.status(200)
                .json(deletedPost)
        } else {
            res.status(404)
        };
    },

    deleteAll: async (req, res) => {
        try {
            const cb = await postsService.deleteAll()
            res.status(200).json(cb)
        } catch (error) {
            console.log(error);//!LOG
        };
        
    }
}
module.exports = postsController