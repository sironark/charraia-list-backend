"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.conflictError = void 0;
function conflictError(resource) {
    return {
        name: 'conflictError',
        message: "".concat(resource || 'Already exixts!'),
    };
}
exports.conflictError = conflictError;
