module.exports = (req, res, next) => {
    if (!req.user) {
        return res.status(401).send({ err: 'You must be loged in!' });
    }

    next();
};
