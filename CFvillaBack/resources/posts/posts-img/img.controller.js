const imgService = require('./img.service');
const imgValidator = require('./img.validator')

const imgController = {

    post: async (req, res) => {
        try {
            const data = {
                originalname: req.file.originalname,
                type: req.file.mimetype,
                fileName: req.file.filename,
                path:req.file.path,
                size: req.file.size
            };
            const newImgId = await imgService.create(data);

            return res.status(201).json({
                massage: 'image created, stored, posted to db',
                newImgId: newImgId
            })

        } catch (error) {
            console.log(error);
            res.json({
                massage: 'imgController.post failure ==>',
                error: error
            })
        }
    },

    getAll: async (req, res) => {
        const cb = await imgService.readAll();
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
        if (cb) {
            res.status(200)
                .json(cb)
        } else {
            console.log(`img not found`)//!LOG;
            res.status(404)
        }
    },

    deleteOneById: async (req, res) => {
        const id = req.params.id;
        const cb = await imgService.deleteOne(id)
        if (cb) {
            res.status(200)
                .json(cb)
        } else {
            res.status(404)
        };
    },

    deleteAll: async (req, res) => {
        try {
            const cb = await imgService.deleteAll()
            res.status(200).json(cb)
        } catch (error) {
            console.log(error);//!LOG
        };
    }
}

module.exports = imgController
