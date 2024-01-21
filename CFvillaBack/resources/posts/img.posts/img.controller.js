const imgService = require('./img.service');
const imgValidator = require('./img.validator')

const imgController = {

    post: async (req, res) => {

        const reqData =  {
            fileName: req.file.filename,
            originalFileName: req.file.originalname,
            type: req.file.mimetype,
            size: req.file.size
        };
        let data = undefined;
        let newImgId = undefined;

        !reqData? res.status(404).json({message:'no req.data'}) : data  = await imgValidator.validate(reqData);

        !data? res.status(404).json({message:'no data'}) : newImgId = await imgService.create(data);
        res.status(201).json(newImgId)
            return console.log('Image Object created + stored + posted to database');     
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
