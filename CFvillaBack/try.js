voici le code d'un middleware d'authentification: 

const User = require('../resources/users/users.model')

const authMiddleware = ()  => {
    return   async  (req, res, next) => {
        console.log('req ran by authMiddleware ');
        const bearer = await req.headers['authorization'];
        const tokenDecoded = bearer && bearer.split(' ')[1];
        if (!tokenDecoded) {
            res.status(401)
            .send({ error: 'unauthorized' })
            console.error('!!! unauthorized !!!');
            next('unauthorized')
        };
        req.currentUser =  User.findOne({ jwt: `${tokenDecoded}` }).exec();
        console.log('current user stored');
        next();
    };

};



module.exports = authMiddleware;

et voici une partie de ce que le terminal communique comme informations:

current user stored
current user ==>  Promise { <pending> }
req ran by accessControlMiddleware
OK => schema validated [Object: null prototype] {
  type: 'postToCheck',
  title: 'test validatoMiddleware',
  author: '65ae34869a4b3305dcfa8748',
  body: 'popular body !'
}

pourquoi current user = Promise { <pending> } ?