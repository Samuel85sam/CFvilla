const Post = require('./posts.model')
const postsService = require('./posts.service');
const authService = require('../../auth/auth.service');
const imgService = require('../posts-img/img.service');
const imgValidator = require('../posts-img/img.validator')

const postsController = {


    post: async (req, res) => {
            // const imgData = {
            //     originalname: req.file.originalname,
            //     type: req.file.mimetype,
            //     fileName: req.file.filename,
            //     path: req.file.path,
            //     size: req.file.size
            // }
           //await imgValidator.validate(imgData);
           // const imgId = await imgService.create(imgData);
           // const currentUser = await authService.exists('_id', req.currentUser);
            const data = {
                type: req.body.type,
                title: req.body.title,
                //author: currentUser,
                body: req.body.body,
               // img: imgId
            };            
            const postId = await postsService.create(data);
            
            res.status(201).json({
                message: 'post created',
                postId: `${postId}`,
               // imgId: `${imgId}`
            });
            
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

        const allPosts = await postsService.readAll(req.query);
        if (allPosts) {
            res.status(200).json(allPosts)
        } else {
            console.log(`no post found`)//!LOG;
            res.status(404)
        }
    },

    updateOneById: async (req, res) => {
        //throw new Error ('erreur test')
        const id = req.params.id;
        const updatedData = {
            type : req.body.type,
            title: req.body.title,
            body: req.body.body
        }
        const postUpdated = await postsService.updateOneById(id, updatedData)
        if (postUpdated) {
            res.status(200).json({ message: "post updated" })

        } else {
            console.log(`post not found`)//!LOG;
            res.status(404)
        }
    },

    populateOne: async (req, res) => {
        const postId = req.params
        !postId ?
            res.status(404).json({ message: "no params" }) : async () => {
                try {
                    const post = await Post.findOne({ title: "mon code", })
                        .populate('img')
                        .populate('author');

                    if (!post) {
                        return res.status(404).json({ message: "Post non trouvé" });
                    };

                    res.status(200).json({ post });

                } catch (error) {
                    console.error(error);
                    res.status(500).json({ message: "Erreur serveur" });
                }
            }
    },

    populateOneById: async (req, res) => {

        const postId = req.params
        populated = postsService.populateOneById(postId);
        populated = false ? res.status(404).json({ message: "post population failure" }) : res.status(200).json({ message: "post populated" })
    },

    deleteOneById: async (req, res) => {

        const id = req.params.id;

        const deletedPost = await postsService.deleteOne(id)
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