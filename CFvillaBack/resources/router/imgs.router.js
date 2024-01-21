const imgsController = require('../posts/img.posts/img.controller');
const imgsRouter = require('express').Router();
const authMiddleware =require('../../middlewares/auth.middleware');
const accessControl = require('../../middlewares/access-control.middleware');
const logMiddleware = require('../../middlewares/log.middleware');
const multer = require('multer');
const imgController = require('../posts/img.posts/img.controller');
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
    .post(authMiddleware(),accessControl(),upload.single('uploaded_file'),imgsController.post)
    .get(imgController.getAll)
    .delete(authMiddleware(),accessControl(),imgsController.deleteAll)
    .all((req,res) => { res.statusCode(405).send('request Unavalable') }
    );

imgsRouter.route('/:id')
    .get(imgsController.getOneById)
    .delete(authMiddleware(),accessControl(),imgsController.deleteOneById)
    .all((req,res) => { res.statusCode(405).send('request Unavalable') }
    );

module.exports = imgsRouter;