import express, {json} from 'express'

const PORT = process.env.PORT

const app = express()

app.use(json())


app.listen(PORT, () => {
    console.log('Servidor escutando na porta ', PORT)
})