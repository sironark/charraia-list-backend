"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importStar(require("express"));
require("express-async-errors");
var http_status_1 = __importDefault(require("http-status"));
var cors_1 = __importDefault(require("cors"));
var list_itens_router_1 = __importDefault(require("./routers/list-itens-router"));
var cart_router_1 = __importDefault(require("./routers/cart-router"));
var errors_handling_middleware_1 = __importDefault(require("./middlewares/errors-handling-middleware"));
var app = (0, express_1.default)();
app.use((0, cors_1.default)()); // to correct the cors error at a front-end project
app.use((0, express_1.json)()); // body-parser
//Get route at /health to test the server connection
app.get('/health', function (req, res) {
    return res.status(http_status_1.default.OK).send("I'm ok!");
});
// Endpoints
//app.use('/charraia', userRouter);
app.use('/charraia', list_itens_router_1.default);
app.use('/charraia', cart_router_1.default);
// Async errors to detect some "throw" error
app.use(errors_handling_middleware_1.default);
exports.default = app;
