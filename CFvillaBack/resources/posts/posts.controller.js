const postsService = require('./posts.service')

const postsController = {

    post: async (req, res) => {
            const post = req.body
            const { type, title, author, body } = post
            const postedData = await postsService.create(type, title, author, body)
            if (postedData) {
                res.status(201)
                    .json(postedData)
            }
    },

    getOneById: async (req, res) => {
       id = req.params.id;
            const post = await postsService.readOne(id)
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
            console.log(`post id ===> ${JSON.stringify(req.params.id)}`)//!LOG;
            console.log(`patch req ===> ${JSON.stringify(req.body)}`)//!LOG;
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
    deleteOneById: async (req, res) => {
            console.log(`req.params ===> ${JSON.stringify(req.params)}`)//!LOG;
            const id = req.params.id;
            console.log(`req.params.id ===> ${JSON.stringify(req.params.id)}`)//!LOG;
            const deletedPost = await postsService.deleteOne(id)
            console.log(`post deleted ===> ${JSON.stringify(deletedPost)}`)//!LOG;
            if (deletedPost) {
                res.status(200)
                    .json(deletedPost)
            } else {
                console.log(`post not found(controller)`)//!LOG;
                res.status(404)
            };
    },
}
module.exports = postsController