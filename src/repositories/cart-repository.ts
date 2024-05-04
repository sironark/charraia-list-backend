import prisma from '@/database/database-connection';
import { Cart } from '@prisma/client';

async function insertToCart(body: Omit<Cart, 'id'>) {
  const answare = await prisma.cart.create({
    data: body,
  });
  return answare;
}

export const cartRepository = {
  insertToCart,
};
