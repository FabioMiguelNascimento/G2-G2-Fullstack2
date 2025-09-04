import express, { json } from 'express';
import { errorHandler, requestNotFound } from './error/errorHandler.js';

const PORT = process.env.PORT

const app = express()

app.use(json())

app.use(errorHandler);
app.use(requestNotFound);

app.listen(PORT, () => {
    console.log('Servidor escutando na porta ', PORT)
})