import { Router } from 'express';
import { deleteCart, getCart, insertToCart } from '@/controllers/cart-controller';

const cartRouter = Router();

cartRouter.post('/cart', insertToCart);
cartRouter.get('/cart', getCart);
cartRouter.delete('/cart', deleteCart);

export default cartRouter;
