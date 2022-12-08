exports.errorHandler = (error, req, res, next) => {
    const statusCode = error.statusCode || 500;
    const errorMessage = error.message || "Something went wrong";
    const errorStatus = error.errorStatus || "Internal server error";
    res.status(statusCode).json({
        status: errorStatus,
        message: errorMessage,
        data: {},
    });

    return;
};
