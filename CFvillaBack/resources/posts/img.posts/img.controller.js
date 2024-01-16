const imgService = require('./img.service')

const imgController = {
    post: async (req,res) =>{
        const file = req.file
        imgService.post();
    }
}

module.exports = imgController
