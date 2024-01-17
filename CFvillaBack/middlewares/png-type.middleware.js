const fs = require('fs');

const pngTypeMiddleware =   (req, res, next) => {
    const fileName = req.file.fileName
    console.log(fileName);
     fs.rename('./uploads' + fileName, '.uploads' + fileName + '.png');
    
    console.log('req ran by pngTypeMiddleware and got a .png');
    next()
}

module.exports = pngTypeMiddleware

