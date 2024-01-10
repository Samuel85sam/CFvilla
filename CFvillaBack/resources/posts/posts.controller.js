const postsService = require('./posts.service')

const postsController = {
    post: async(req,res) =>{
        try {
            const post = req.body
            const{title, author, body} = post
            const postedData = await postsService.create(title,author,body)
            if (postedData) {
                res.status(201)
                    .json(postedData)
            }
        } catch (error) {
            console.log(`ERROR controller post FAILED ${error}`)//!LOG;
        }
    },
    getOne: async(req,res) =>{
        try {console.log(`req.body ===> ${req.body}`);
            const query = req.body
            const{queryPostTitle, queryPostAuthor} = query
            const post = await postsService.readOne(queryPostTitle,queryPostAuthor)
            if (post) {
                res.status(200)
            }else{
                console.log(`post not found`)//!LOG;
                res.status(404)
            }

            return post

        } catch (error) {
            console.log(`ERROR controller querry FAILED ${error}`)//!LOG;
        }
    },
    getAll: async(req,res) =>{
        try {
            const allPosts = [];
            allPosts = await postsService.readAll();
            if (allPosts) {
                res.status(200)
            }else{
                console.log(`no post found`)//!LOG;
                res.status(404)
            }

            return allPosts

        } catch (error) {
            console.log(`ERROR controller querry FAILED ${error}`)//!LOG;
        }
    },
    updateOne: async(req,res) =>{
        try {console.log(`req.body ===> ${req.body}`);
            const query = req.body
            const{queryPostTitle, queryPostAuthor,updatedTitle,updatedType,updatedAutor,updatedBody} = query
            const postUpdated = await postsService.updateOne(queryPostTitle,queryPostAuthor,updatedTitle,updatedType,updatedAutor,updatedBody)
            if (post) {
                res.status(200)
            }else{
                console.log(`post not found`)//!LOG;
                res.status(404)
            }

            return postUpdated

        } catch (error) {
            console.log(`ERROR controller querry FAILED ${error}`)//!LOG;
        }
    },
    updateByType: async(req,res) =>{
        try {console.log(`req.body ===> ${req.body}`);
            const query = req.body
            const{queryPostType,updatedTitle,updatedType,updatedAutor,updatedBody} = query
            const postsUpdated = await postsService.updateMany(queryPostType,updatedTitle,updatedType,updatedAutor,updatedBody)
            if (postsUpdated) {
                res.status(200)
            }else{
                console.log(`no post found`)//!LOG;
                res.status(404)
            }

            return postsUpdated

        } catch (error) {
            console.log(`ERROR controller querry FAILED ${error}`)//!LOG;
        }
    },
    updateByAuthor: async(req,res) =>{
        try {console.log(`req.body ===> ${req.body}`);
            const query = req.body
            const{queryPostAuthor,updatedTitle,updatedType,updatedAutor,updatedBody} = query
            const postsUpdated = await postsService.updateMany(queryPostAuthor,updatedTitle,updatedType,updatedAutor,updatedBody)
            if (postsUpdated) {
                res.status(200)
            }else{
                console.log(`no post found`)//!LOG;
                res.status(404)
            }

            return postsUpdated

        } catch (error) {
            console.log(`ERROR controller querry FAILED ${error}`)//!LOG;
        }
    },
    deleteOne: async(req,res) =>{
        try {console.log(`req.body ===> ${req.body}`);
            const query = req.body
            const{queryPostTitle, queryPostAuthor} = query
            const deletedPost = await postsService.deleteOne(queryPostTitle,queryPostAuthor)
            if (deletedPost) {
                res.status(200)
            }else{
                console.log(`post not found`)//!LOG;
                res.status(404)
            }

            return true

        } catch (error) {
            console.log(`ERROR controller querry FAILED ${error}`)//!LOG;
        }
    },
    deleteByType: async(req,res) =>{
        try {
            const query = req.body
            const allPosts = [];
            allPosts = await postsService.readAll(query);
            if (allPosts) {
                res.status(200)
            }else{
                console.log(`no post found`)//!LOG;
                res.status(404)
            }

            return true

        } catch (error) {
            console.log(`ERROR controller querry FAILED ${error}`)//!LOG;
        }
    },
}
module.exports = postsController