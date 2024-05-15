"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var cart_controller_1 = require("../controllers/cart-controller");
var cartRouter = (0, express_1.Router)();
cartRouter.post('/cart', cart_controller_1.insertToCart);
exports.default = cartRouter;
