import { Router } from 'express';
import { getCart, insertToCart } from '@/controllers/cart-controller';

const cartRouter = Router();

cartRouter.post('/cart', insertToCart);
cartRouter.get('/cart', getCart);

export default cartRouter;
