import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';
import morgan from 'morgan';
dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;

app.use(morgan('dev'));
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.send(`Hello from the backend!`);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

export default app;
