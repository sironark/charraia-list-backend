import { Cart } from '@prisma/client';
import prisma from '@/database/database-connection';

async function insertToCart(body: Omit<Cart, 'id'>) {
  const answare = await prisma.cart.create({
    data: body,
  });
  return answare;
}

async function getCart() {
  const answare = await prisma.cart.findMany({
    include: {
      listItens: true,
    },
    orderBy: {
      id: 'asc',
    },
  });
  return answare;
}

async function deletecart(){
  const answare = await prisma.cart.deleteAll();
  return answare;
}

export const cartRepository = {
  insertToCart,
  getCart,
  deletecart,
};
