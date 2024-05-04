import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { ListItens } from '@prisma/client';
import { listService } from '@/services/list-itens-service';
import { invalidParamError } from '@/errors/invalid-param-error';

export async function getItens(req: Request, res: Response) {
  const listItens = await listService.getItens();
  res.status(httpStatus.OK).send(listItens);
}

export async function getItemById(req: Request, res: Response) {
  const id = Number(req.params.id);
  if (!id || isNaN(id) || id < 1) throw invalidParamError('Id param not valid!');

  const item = await listService.getItemById(id);
  res.status(httpStatus.OK).send(item);
}

export async function createItem(req: Request, res: Response) {
  const body = req.body as Omit<ListItens, 'id'>;

  const response = await listService.createItens(body);

  res.status(httpStatus.CREATED).send(response);
}

export async function editQuantity(req: Request, res: Response) {
  const id = Number(req.params.id);
  if (!id || isNaN(id) || id < 1) throw invalidParamError('Id param not valid!');

  const answare = await listService.editQuantity(id);
  res.status(httpStatus.OK).send(answare);
}
/*
export async function editGame(req: Request, res: Response) {
  const { name } = req.body as Omit<Game, 'id'>;

  const id = Number(req.params.id);
  if (!id || isNaN(id) || id < 1) throw invalidParamError('Id param not valid!');

  const game = await gameService.editGame(id, name);
  res.status(httpStatus.OK).send(game);
}

export async function deleteGame(req: Request, res: Response) {
  const id = Number(req.params.id);
  if (!id || isNaN(id) || id < 1) throw invalidParamError('Id param not valid!');

  const game = await gameService.deleteGame(id);
  res.status(httpStatus.OK).send(game);
}
*/
