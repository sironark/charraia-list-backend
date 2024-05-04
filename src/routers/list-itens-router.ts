import { createItem, editQuantity, getItemById, getItens } from '@/controllers/list-itens-controller';
import { Router } from 'express';

const listRouter = Router();

listRouter.get('/list-itens', getItens);
listRouter.get('/list-itens/:id', getItemById);
listRouter.post('/list-itens', createItem);
listRouter.put('/list-itens/:id', editQuantity);
/*
listRouter.get('/:id', getGameById);
listRouter.put('/:id', validateSchemaMiddleware(gameInputSchema), editGame);
listRouter.delete('/:id', validateSchemaMiddleware(gameInputSchema), deleteGame);*/

export default listRouter;
