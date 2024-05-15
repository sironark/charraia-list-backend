"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var http_status_1 = __importDefault(require("http-status"));
function errorHandlingMiddleware(error, req, res, next) {
    // Errors declarations
    if (error.name === 'notFoundError') {
        return res.status(http_status_1.default.NOT_FOUND).send(error.message);
    }
    if (error.name === 'invalidParamError') {
        return res.status(http_status_1.default.UNPROCESSABLE_ENTITY).send(error.message);
    }
    if (error.name === 'conflictError') {
        return res.status(http_status_1.default.CONFLICT).send(error.message);
    }
    if (error.name === 'lockedError') {
        return res.status(http_status_1.default.LOCKED).send(error.message);
    }
    console.log(error);
    return res.sendStatus(http_status_1.default.INTERNAL_SERVER_ERROR);
}
exports.default = errorHandlingMiddleware;
