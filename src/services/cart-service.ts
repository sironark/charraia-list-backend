import { lockedError } from '@/errors/locked-error';
import { notFoundError } from '@/errors/not-found-error';
import { cartRepository } from '@/repositories/cart-repository';
import { listRepository } from '@/repositories/list-itens-repository';

async function insertToCart(body) {
  const idExists = await listRepository.getItemById(body.itemId);
  if (!idExists) throw notFoundError('Item não encontrado!');
  console.log(idExists);
  if (idExists.quantity <= 0)
    throw lockedError('item não pode ser selecionado pois já foi reservado por outra pessoa.');

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

async function deleteCart() {
  const response = await cartRepository.deletecart();
  return response;
}

export const cartService = {
  insertToCart,
  getCart,
  deleteCart,
};
