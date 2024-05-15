/*import { conflictError } from '../errors/conflict-error';
import { notFoundError } from '../errors/not-found-error';
import { usersRepository } from '../repositories/users-repository';

async function getUsers() {
  const users = await usersRepository.getUsers();
  return users;
}

async function getUserById(gameId: number) {
  const user = await usersRepository.getUserById(gameId);

  if (!user) throw notFoundError('Usuário não encontrado.');
  return user;
}

async function createUser(name: string, cell: number) {
  const alreadyExist = await gameRepository.getGameByName(gameName);
  if (alreadyExist) throw conflictError('Game already exists!');

  const user = await usersRepository.createUser(name, cell);
  return user;
}

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
}

export const usersService = {
  getUserById,
  getUsers,
  createUser,
};
*/
