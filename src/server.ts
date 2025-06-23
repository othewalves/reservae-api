
import express, { Request, Response } from 'express';

const app = express();
const PORT = 3000;

app.use(express.json())

app.get('/', (_req: Request, res: Response) => {
    res.send('API da Biblioteca 👋')
});

app.listen(PORT, () => {
    console.log(`API no ar, acesse: http://localhost:${PORT}`)
})