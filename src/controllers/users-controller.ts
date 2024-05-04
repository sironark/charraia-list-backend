/*import { Request, Response } from 'express';
import httpStatus from 'http-status';
import { invalidParamError } from '@/errors/invalid-param-error';
import { usersService } from '@/services/users-service';

export async function getUsers(req: Request, res: Response) {
  const users = await usersService.getUsers();
  res.status(httpStatus.OK).send(users);
}

export async function getUserById(req: Request, res: Response) {
  const id = Number(req.params.id);
  if (!id || isNaN(id) || id < 1) throw invalidParamError('Id param not valid!');

  const user = await usersService.getUserById(id);
  res.status(httpStatus.OK).send(user);
}

export async function createUser(req: Request, res: Response) {
  const { name, cell } = req.body;

  const user = await usersService.createUser(name, cell);

  res.status(httpStatus.CREATED).send(user);
}
*/
