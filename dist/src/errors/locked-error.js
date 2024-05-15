"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lockedError = void 0;
function lockedError(resource) {
    return {
        name: 'lockedError',
        message: "".concat(resource || 'Não é possível acessar esse item!'),
    };
}
exports.lockedError = lockedError;
