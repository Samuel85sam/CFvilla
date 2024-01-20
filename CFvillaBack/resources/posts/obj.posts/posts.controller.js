const { Types } = require('mongoose')
const Post = require('./posts.model')
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

    populateOneById: async (req, res) => {
        const postId = req.params;
        const fieldName = req.body.fieldName;
        const post = await Post.findOne({ _id: postId }).
            populate('img').
            exec();
        post.img.fileName = imgName;
        post.img.size = imgSize;
        console.log('img values', imgName, ' + ', imgSize);

        // const populated = await postsService.populateOneById(postId);
        // console.log('populated in postController ==> ',populated);
    },

    populateOne: async (req, res) => {
        try {
            const post = await Post.findOne({ title: "mon code" }).populate('img');

            if (!post) {
                return res.status(404).json({ message: "Post non trouvé" });
            };

            const img = post.img;
            const imgName = img.fileName;
            const imgSize = img.size;

            console.log('img values', imgName, ' + ', imgSize);

            res.status(200).json({ post });

        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Erreur serveur" });
        }
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