"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = errorHandler;
function errorHandler(error, req, res, next) {
    console.error(error);
    return res.status(500).json({
        error: 'Internal server error',
    });
}
//# sourceMappingURL=errorHandler.js.map