const logger = (req, res, next) => {
    const targetUrl = `${req.protocol}://${req.get('host')}${req.originalUrl}`;

    console.log(`Loading: ${targetUrl}`);
    next();
};

module.exports = logger;