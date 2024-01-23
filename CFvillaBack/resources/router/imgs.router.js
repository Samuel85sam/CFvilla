const imgsController = require('../posts/posts-img/img.controller');
const imgValidator = require('../posts/posts-img/img.validator');
const imgsRouter = require('express').Router();
const authControl =require('../../middlewares/auth.middleware');
const accessControl = require('../../middlewares/access-control.middleware');
const logMiddleware = require('../../middlewares/log.middleware');
const multer = require('multer');
const imgController = require('../posts/posts-img/img.controller');
const validator = require('../../middlewares/validator.middleware')
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/')
    },
    //* ↓ ajout du .type de fichier après le "filename" ↓
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, uniqueSuffix+file.originalname)
    }
});
const upload = multer({dest:'uploads/',storage});

imgsRouter.route('/')
    .post(authControl(),accessControl(),upload.single('uploaded_file'),imgsController.post)
    .get(imgController.getAll)
    .delete(imgsController.deleteAll)
    .all((req,res) => { res.statusCode(405).send('request Unavalable') }
    );

imgsRouter.route('/:id')
    .get(imgsController.getOneById)
    .delete(authControl(),accessControl(),imgsController.deleteOneById)
    .all((req,res) => { res.statusCode(405).send('request Unavalable') }
    );

module.exports = imgsRouter;