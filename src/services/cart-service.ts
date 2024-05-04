import { cartRepository } from '@/repositories/cart-repository';

async function insertToCart(body) {
  const user = await cartRepository.insertToCart(body);
  return user;
}

export const cartService = {
  insertToCart,
};
