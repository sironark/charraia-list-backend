"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var list_itens_controller_1 = require("../controllers/list-itens-controller");
var express_1 = require("express");
var listRouter = (0, express_1.Router)();
listRouter.get('/list-itens', list_itens_controller_1.getItens);
listRouter.get('/list-itens/:id', list_itens_controller_1.getItemById);
listRouter.post('/list-itens', list_itens_controller_1.createItem);
listRouter.put('/list-itens/:id', list_itens_controller_1.editQuantity);
/*
listRouter.get('/:id', getGameById);
listRouter.put('/:id', validateSchemaMiddleware(gameInputSchema), editGame);
listRouter.delete('/:id', validateSchemaMiddleware(gameInputSchema), deleteGame);*/
exports.default = listRouter;
