const imgService = require('./img.service');
const postsService = require('../obj.posts/posts.service')
const imgController = {

    post: async (req, res) => {
        const data =  {
            fileName: req.file.filename,
            originalFileName: req.file.originalname,
            type: req.body.type,
            size: req.file.size
        };
        const postedImg = await imgService.create(data);
        if (postedImg) {
            res.status(201).json(postedImg)
            return console.log('img posted');
        }
    },

    getAll: async (req, res) => {
        const cb = await imgService.readAll();
        console.log(cb);
        if (cb) {
            res.status(200).json(cb)
        } else {
            console.log(`no user found`)//!LOG;
            res.status(404)
        }
    },

    getOneById: async (req, res) => {
        id = req.params.id;
        const cb = await imgService.readOneById(id)
        console.log(cb);
        if (cb) {
            res.status(200)
                .json(cb)
        } else {
            console.log(`img not found`)//!LOG;
            res.status(404)
        }
    },

    deleteOneById: async (req, res) => {
        console.log('deleOne-imgController');

        const id = req.params.id;
        const cb = await imgService.deleteOne(id)
        console.log(cb);
        if (cb) {
            res.status(200)
                .json(cb)
        } else {
            res.status(404)
        };
    },

    deleteAll: async (req, res) => {
        try {
            console.log('deleAll-imgController');
            const cb = await imgService.deleteAll()
            res.status(200).json(cb)
        } catch (error) {
            console.log(error);//!LOG
        };
    }
}

module.exports = imgController
