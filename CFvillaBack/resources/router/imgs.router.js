const imgsController = require('../posts/img.posts/img.controller');
const imgsRouter = require('express').Router();
const accessControl = require('../../middlewares/access-control.middleware');
const logMiddleware = require('../../middlewares/log.middleware');
const authMiddleware =require('../../middlewares/auth.middleware');
const pngTypeMiddleware = require('../../middlewares/png-type.middleware')
const multer = require('multer');


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
        console.log(file);
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, uniqueSuffix+file.originalname)
    }
})

const upload = multer({dest:'uploads/',storage});

imgsRouter.route('/')
    .post(authMiddleware(),accessControl(),upload.single('uploaded_file'),imgsController.post)
    .all((res, req) => { res.statusCode(405).send('request Unavalable') }
    );

// postsRouter.route('/:id')
//     .get(postsController.getOneById)
//     .delete(authMiddleware,accessControl(),postsController.deleteOneById)
//     .patch(authMiddleware,accessControl(),postsController.updateOneById)
//     .all((res, req) => { res.statusCode(405).send('request Unavalable') }
//     );

module.exports = imgsRouter;