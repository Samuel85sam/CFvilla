const logMiddleware = (req, res, next) => {
    console.log('logMiddleware');
    next();
}

module.exports = logMiddleware;