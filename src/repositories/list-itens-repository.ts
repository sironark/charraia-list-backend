import prisma from '@/database/database-connection';

async function getItens() {
  const listItens = await prisma.listItens.findMany();
  return listItens;
}

async function getItemById(itemId: number) {
  const item = await prisma.listItens.findUnique({
    where: {
      id: itemId,
    },
  });
  return item;
}
/*
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
*/
async function createItens(body) {
  const answare = await prisma.listItens.createMany({
    data: body,
    skipDuplicates: true,
  });
  return answare;
}

async function editQuantity(id: number) {
  const answare = await prisma.listItens.update({
    where: {
      id,
    },
    data: {
      quantity: { decrement: 1 },
    },
  });
  return answare;
}
/*
async function deleteGame(gameId: number) {
  const game = await prisma.game.delete({
    where: {
      id: gameId,
    },
  });
  return game;
}
*/
export const listRepository = {
  getItens,
  getItemById,
  createItens,
  editQuantity,
};
