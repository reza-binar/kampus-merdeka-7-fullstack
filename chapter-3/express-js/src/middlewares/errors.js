const { NotFoundError } = require("../utils/request");

exports.errorHandler = (err, req, res, next) => {
    const status = err.status || 500;
    const errors = err.errors || [];
    let message = err.message;
    if (status == 500) {
        message = "Internal Server Error";
    }

    console.error(err);

    res.status(status).json({
        success: false,
        data: null,
        message,
        errors,
    });
};

exports.notFoundURLHandler = (req, res, next) => {
    throw new NotFoundError("URL is Not Found!");
};
