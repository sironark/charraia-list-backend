import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { Cart } from '@prisma/client';
import { cartService } from '@/services/cart-service';

export async function insertToCart(req: Request, res: Response) {
  const body = req.body as Omit<Cart, 'id'>;

  const response = await cartService.insertToCart(body);

  res.status(httpStatus.CREATED).send(response);
}

export async function getCart(req: Request, res: Response) {
  const response = await cartService.getCart();
  res.status(httpStatus.OK).send(response);
}
