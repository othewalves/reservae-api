
import express, { Request, Response } from 'express';
import { authRouter, userRouter, } from './routes';

const app = express();
const PORT = 3000;

app.use(express.json())

app.get('/', (_req: Request, res: Response) => {
    res.send('API do Reservaê tá on!👋')
});

app.use('/user', userRouter);
app.use('/auth', authRouter);

app.listen(PORT, () => {
    console.log(`API no ar, acesse: http://localhost:${PORT}`)
})