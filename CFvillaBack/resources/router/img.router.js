const imgsController = require('../posts/img.posts/img.controller');
const imgsRouter = require('express').Router();
const multer  = require('multer');
const upload = multer({ dest: 'uploads/' });


//! ------------------FRONT-END

//!! Don't forget the enctype="multipart/form-data" in your form.

//!! <form action="/profile" method="post" enctype="multipart/form-data">
//!!   <input type="file" name="avatar" />
//!! </form>

//! ------------------FRONT-END


imgsRouter.route('/')
    .post(upload.single('img'), imgsController.createImg)
    .all((res,req) => { res.statusCode(405).send('request Unavalable') });



module.exports = imgsRouter