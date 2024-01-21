const Post = require('./posts.model')
const postsService = require('./posts.service');
const postsValidator = require('./posts.validator');

const postsController = {

    // post: async (req, res) => {

    //     const reqData = req.body;
    //     let data = undefined;
    //     let newPostId = undefined;
    //     let populatedValues = undefined;

    //     !reqData ? res.statut(417).json({ message: "req.data expectation failed ==> log=", reqData }) : data = await postsValidator.validate(reqData);
    //     !data ? res.statut(501).json({ message: "data from validator not implemented" }) : newPostId = await postsService.create(postData);

    //     !newPostId ? res.status(503).json({ massage: "post creation service unavalable" }) : populatedValues = await postsService.populateOneById(newPostId)

    //     res.status(201).json({
    //         message: 'post created',
    //         postId: `${newPostId}`,
    //         body: `${populatedValues}`
    //     })
    // },
    post: async (req, res) => {

        try {
            const reqData = req.body;
            const data = await postsValidator.validate(reqData);

            if (!data) {
                return res.status(501).json({ message: "data from validator not implemented" });
            }

            const newPostId = await postsService.create(data);

            if (!newPostId) {
                return res.status(503).json({ message: "post creation service unavailable" });
            }

            const populatedValues = await postsService.populateOneById(newPostId);

            res.status(201).json({
                message: 'post created',
                postId: `${newPostId}`,
                body: `${populatedValues}`
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
            res.status(200).json(postUpdated)
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