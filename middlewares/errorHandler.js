function errorHandler (err, req, res, next) {
    res.json = ({
        status: 500,
        error: err.message,
    });
};

module.exports = errorHandler;