function notFound (req, res, next) {
    res.json({
        status: 404,
        error: "Not Found",
        message: "Pagina non trovata"
    });
};

module.exports = notFound;