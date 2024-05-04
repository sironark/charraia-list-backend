import { lockedError } from '@/errors/locked-error';
import { notFoundError } from '@/errors/not-found-error';
import { listRepository } from '@/repositories/list-itens-repository';

async function getItens() {
  const listItens = await listRepository.getItens();
  return listItens;
}

async function getItemById(gameId: number) {
  const item = await listRepository.getItemById(gameId);

  if (!item) throw notFoundError('Item não encontrado.');
  return item;
}

async function createItens(body) {
  const user = await listRepository.createItens(body);
  return user;
}

async function editQuantity(id: number) {
  const idExists = await listRepository.getItemById(id);
  if (!idExists) throw notFoundError('Item não encontrado!');
  if (idExists.quantity === 0)
    throw lockedError('item não pode ser selecionado pois já foi reservado por outra pessoa.');

  const answare = await listRepository.editQuantity(id);
  return answare;
}

/*
async function editGame(gameId: number, gameName: string) {
  const idExists = await gameRepository.getGameById(gameId);
  if (!idExists) throw notFoundError('Game not found!');

  const nameRepeated = await gameRepository.getGameByName(gameName);
  if (nameRepeated) throw conflictError('Name game already exists!');

  const game = await gameRepository.editGame(gameId, gameName);
  return game;
}

async function deleteGame(gameId: number) {
  const idExists = await gameRepository.getGameById(gameId);
  if (!idExists) throw notFoundError('Game not found!');

  const game = await gameRepository.deleteGame(gameId);
  return game;
}*/

export const listService = {
  getItemById,
  getItens,
  createItens,
  editQuantity,
};
