"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.invalidParamError = void 0;
function invalidParamError(resource) {
    return {
        name: 'invalidParamError',
        message: "".concat(resource || 'Invalid params error', " "),
    };
}
exports.invalidParamError = invalidParamError;
