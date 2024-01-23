const Post = require('./posts.model')
const postsService = require('./posts.service');
const imgService = require('../posts-img/img.service');
//const postsValidator = require('./posts.validator');

const postsController = {

    
    post: async (req, res) => {
        console.log('req.body dans img controller ==>', req.body);
        console.log('req.file dans img controller ==>', req.file);
        try {
            const reqfileData =  {
                fileName: req.file.filename,
                originalFileName: req.file.originalname,
                type: req.file.mimetype,
                size: req.file.size
            };
            const reqData = req.body;
            //const data = await postsValidator.validate(reqData)
            const newPostId = await postsService.create(reqData);
            const newImgId = await await imgService.create(reqfileData);
           
            res.status(201).json({
                message: 'post created',
                postId: `${newPostId}`,
                imgId: `${newImgId}`
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Internal Server Error" });
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
            res.status(200).json({message : "post updated"})
            
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

                    console.log(img, ' & ', author, ' are populated');

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