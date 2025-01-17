import express, { json, Request, Response } from 'express';
import 'express-async-errors';
import httpStatus from 'http-status';
import cors from 'cors';
import listRouter from './routers/list-itens-router';
import cartRouter from './routers/cart-router';
import errorHandlingMiddleware from '@/middlewares/errors-handling-middleware';

const app = express();

app.use(cors()); // to correct the cors error at a front-end project
app.use(json()); // body-parser

//Get route at /health to test the server connection
app.get('/health', (req: Request, res: Response) => {
  return res.status(httpStatus.OK).send("I'm ok!");
});

// Endpoints
//app.use('/charraia', userRouter);
app.use('/charraia', listRouter);
app.use('/charraia', cartRouter);

// Async errors to detect some "throw" error
app.use(errorHandlingMiddleware);

export default app;
