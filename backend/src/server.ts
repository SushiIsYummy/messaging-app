import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';
import morgan from 'morgan';
import { createExpressMiddleware } from '@trpc/server/adapters/express';
import { appRouter } from './trpc.js';

dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;

app.use(morgan('dev'));
app.use(helmet());
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
  }),
);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/trpc', createExpressMiddleware({ router: appRouter }));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;
