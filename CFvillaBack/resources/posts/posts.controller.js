const postsService = require('./posts.service')

const postsController = {
    post: async(req,res) =>{
        try {console.log(`req.body ===> ${req.body}`);
            const post = req.body
            const{title, author, body} = post
            const postedData = await postsService.create(title,author,body)
            if (postedData) {
                res.status(201)
                    .json(postedData)
            }
        } catch (error) {
            console.log(`ERROR controller post FAILED ${error}`)//!LOG;
        }
    }
}
module.exports = postsController