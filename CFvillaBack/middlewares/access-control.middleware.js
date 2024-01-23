
const accessControl = () => {
    return async (req, res, next) => {
        const crntUser = req.currentUser
        if (!crntUser) {
            res.status(401)
                .send({ error: 'user not logged' })
                .json({ message: "A.C. user not logged" })
                next('user not logged')
            //une fois qu'un argument est envoyé dans le next()
            //express comprend que req s'arrête là et qu'on ne va pas dans le controller ou tt autrre action. (dans ce cas là il ne va pas dans next()↓↓)
        } else {
            console.log('accCtrl currUser : ', req.crntUser);
            next()
        }
    };

};

module.exports = accessControl