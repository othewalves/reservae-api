
import express, { Request, Response } from 'express';
import { authRouter, userRouter, bookRouter } from './routes';
import path from 'path';
// import {cors} from 'cors';
const app = express();
const PORT = 3000;

app.use(express.json());
// app.use(cors());

app.use(
    '/files',
    express.static(path.resolve(__dirname, '..', 'tmp'))
);

app.get('/', (_req: Request, res: Response) => {
    res.send('API do Reservaê tá on!👋')
});


app.use('/user', userRouter);
app.use('/auth', authRouter);
app.use('/book', bookRouter);

app.listen(PORT, () => {
    console.log(`API no ar, acesse: http://localhost:${PORT}`)
})