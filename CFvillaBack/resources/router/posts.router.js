const postsController = require('../posts/posts-obj/posts.controller');
const postValidator = require('../posts/posts-obj/posts.validator');
const postsRouter = require('express').Router();
//const multerError = require('../../middlewares/multer-error-handeling')
const accessControl = require('../../middlewares/access-control.middleware');
const authMiddleware = require('../../middlewares/auth.middleware');
const validator = require('../../middlewares/validator.middleware')
const logMiddleware = require('../../middlewares/log.middleware');
const multer = require('multer');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/')
    },
    //* ↓ ajout du .type de fichier après le "filename" ↓
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, uniqueSuffix + file.originalname)
    }
});
const upload = multer({ dest: 'uploads/', storage });

postsRouter.route('/')
    .post(authMiddleware(), accessControl(), upload.single('uploaded_file'),validator(postValidator), postsController.post)
    .get(postsController.getAll)
    .delete(authMiddleware(), accessControl(), postsController.deleteAll)
    .patch(authMiddleware(), accessControl(), upload.single('uploaded_file'),validator(postValidator), postsController.populateOne)
    .all((req, res) => { res.status(405).send('request Unavalable') }
    );

postsRouter.route('/:id')
    .get(postsController.getOneById)
    .delete(authMiddleware(),accessControl(),postsController.deleteOneById)
    .delete(authMiddleware(),accessControl(),postsController.deleteOneById)
    .patch(authMiddleware(),accessControl(),upload.single('uploaded_file'),validator(postValidator),postsController.updateOneById)
    .all((req, res) => { res.status(405).send('request Unavalable') }
    );

module.exports = postsRouter;