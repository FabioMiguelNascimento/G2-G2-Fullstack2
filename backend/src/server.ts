import cors from 'cors';
import express, { json } from 'express';
import { errorHandler, requestNotFound } from './error/errorHandler.js';
import authRoute from './http/route/auth.route.js';
import productRoute from './http/route/product.route.js';
import { env } from './schema/utils/env.schema.js';

const PORT = env.PORT
const app = express()

app.use(json())
app.use(cors())

app.use('/api/auth', authRoute)
app.use('/api/product', productRoute)

app.use(errorHandler);
app.use(requestNotFound);

app.listen(PORT, () => {
    console.log('Servidor escutando na porta ', PORT)
})