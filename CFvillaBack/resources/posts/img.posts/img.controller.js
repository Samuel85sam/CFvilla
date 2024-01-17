const imgService = require('./img.service')

const imgController = {
    post: async (req, res) => {
        const data = {
            fileName: req.file.filename,
            originalFileName: req.file.originalname,
            size: req.file.size
        };
        const postedImg = await imgService.post(data);
        if (postedImg) {
            res.status(201).json(postedImg)
            return console.log('img posted');
        }
    }
}

module.exports = imgController
