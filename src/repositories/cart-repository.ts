import { Cart } from '@prisma/client';
import prisma from '@/database/database-connection';

async function insertToCart(body: Omit<Cart, 'id'>) {
  const answare = await prisma.cart.create({
    data: body,
  });
  return answare;
}

export const cartRepository = {
  insertToCart,
};
