/*import prisma from '../database/database-connection';

async function getUsers() {
  const users = await prisma.users.findMany();
  return users;
}

async function getUserById(userId: number) {
  const user = await prisma.users.findUnique({
    where: {
      id: userId,
    },
  });
  return user;
}

async function getGameByName(gameName: string) {
  const game = await prisma.game.findFirst({
    where: {
      name: {
        mode: 'insensitive',
        equals: gameName,
      },
    },
  });
  return game;
}

async function createUser(name: string, cell: number) {
  const game = await prisma.users.create({
    data: {
      name: name,
      cell: cell,
    },
  });
  return game;
}

async function editGame(gameId: number, gameName: string) {
  const game = await prisma.game.update({
    where: {
      id: gameId,
    },
    data: {
      name: gameName,
    },
  });
  return game;
}

async function deleteGame(gameId: number) {
  const game = await prisma.game.delete({
    where: {
      id: gameId,
    },
  });
  return game;
}

export const usersRepository = {
  getUsers,
  getUserById,
  createUser,
};
*/
