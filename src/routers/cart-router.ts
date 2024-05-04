import { Router } from 'express';
import { insertToCart } from '@/controllers/cart-controller';

const cartRouter = Router();

cartRouter.post('/cart', insertToCart);

export default cartRouter;
