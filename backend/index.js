const express = require('express')
const filmes = require('./src/data/filmes.json')
const cors = require('cors')

const PORT = 3001

const app = express()
app.use(express.json())
app.use(cors())

// Rotas

app.get('/filmes', (req, res) => {
    return res.status(200).json(filmes)
})

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`))