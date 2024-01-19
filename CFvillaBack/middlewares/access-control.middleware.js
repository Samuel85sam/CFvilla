
const accessControl = () => {
    return async (req, res, next) => {
        console.log('req ran by accessControlMiddleware ');
        const currentUser = await req.currentUser
        if (!currentUser) {
            res.status(401)
                .send({ error: 'userNotLogged' })
            console.error('!!! userNotLogged !!!');
            next('userNotLogged')
            //une fois qu'un argument est envoyé dans le next()
            //express comprend que req s'arrête là et qu'on ne va pas dans le controller ou tt autrre action. (dans ce cas là il ne va pas dans next()↓↓)
        };
        console.log('req passed accessControlMiddleware ');
        next()
    };

};

module.exports = accessControl