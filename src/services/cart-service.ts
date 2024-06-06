import { cartRepository } from '@/repositories/cart-repository';

async function insertToCart(body) {
  const response = await cartRepository.insertToCart(body);
  return response;
}

async function getCart() {
  const response = await cartRepository.getCart();
  const editedResponse = response.map((response) => ({
    name: response.userName,
    cell: response.userCells,
    itenName: response.listItens.name,
    itenDescriptions: response.listItens.description,
    itenQuantity: response.listItens.quantity,
  }));

  return editedResponse;
}

export const cartService = {
  insertToCart,
  getCart,
};
