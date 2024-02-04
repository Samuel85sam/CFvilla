
    multerError = (req, res, next, err) => {
        if (err instanceof multer.MulterError) {
            // Une erreur Multer s'est produite lors du téléchargement
            console.error('Erreur Multer :', err);
            // Transmettre l'erreur à la prochaine fonction middleware
            next(err);
        } else if (err) {
            // Une erreur inattendue s'est produite
            console.error('Erreur inattendue lors du téléchargement :', err);
            // Transmettre l'erreur à la prochaine fonction middleware
            next(err);
        } else {
            console.log('multer ==> OK');
            // Le téléchargement s'est déroulé sans erreur
            next();
        }
    };

module.exports = multerError;