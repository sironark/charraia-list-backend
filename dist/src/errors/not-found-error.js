"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notFoundError = void 0;
function notFoundError(resource) {
    return {
        name: 'notFoundError',
        message: "".concat(resource || 'Not found!'),
    };
}
exports.notFoundError = notFoundError;
