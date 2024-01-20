const Post = require('./posts.model')
const postsService = require('./posts.service')

const postsController = {

    post: async (req, res) => {
        const postData = req.body;
        console.log('postData dans controller ==>',postData);
        !postData? res.statut(404).json({message: "req.body undefined"}) : console.log('postData ok dans ternaire controller ==>');
        // async (postData) => { 
        //     console.log('fonct async dans ternaire controller ==>');
            const postedData = await postsService.create(postData) 
        console.log('postedData ==> ', postedData)
        //res.status(201).json(postedData)
        !postedData ? res.status(404).json({ massage: "post creation failure" }) : res.status(200).json(postedData)
    //}
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

    populateOneById: async ({ postId }) => {
        const id = postId
        //JSON.stringify({ postId });
        console.log('{postId} stringified');
        !id ? res.status(404).json({ message: "no postId to find to populate" }) : async (id) => {
            const post = await Post.findOne({ _id: id })
                .populate('img')
                .populate('author')
                .exec();

            !post ? res.status(404).json({ message: "no post to populate" }) : console.log('populated values', post.img, ' + ', post.author);
            res.status(200).json(post)
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