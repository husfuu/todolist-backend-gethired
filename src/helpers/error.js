module.exports = class AppError extends Error {
    status;
    constructor(message, statusCode, errorStatus) {
        super(message);
        this.statusCode = statusCode;
        this.errorStatus = errorStatus;
    }
};
