const postsRouter = require('./posts.router')
const usersRouter = require('./users.router')
const authRouter = require('./auth.router')
const logMiddleware = require('../../middlewares/log.middleware');

const router = require('express').Router();
// router.post('/posts',postsController.post);
// router.get('/posts',postsController.getAll);
// ou
//          callBack ↓↓↓↓↓↓↓↓↓↓
// router.post('/posts',async (req, res) => {
//         const currentUser = req.currentUser;
//         if (!currentUser) {
//             res.status(401)
//             console.error('!!! unautorized !!!');
//         }
//         const postData = req.body
//         console.log(`currentUser ===> `, req.currentUser);
//         //* verif match currentUser >< {admin : true}

//         if (postedData) {
//             res.status(201)
//                 .json(postedData)
//         }
//         const postedData = await postsService.create(postData)
//     });
router.use('/posts', postsRouter);
router.use('/users', usersRouter);
router.use('/auth', authRouter);



module.exports = router