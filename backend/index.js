const express = require('express')
const filmes = require('./src/data/filmes.json')
const cors = require('cors')
const mongoose = require('mongoose')
const Filme = require('./src/data/Model/filmeModel')

const PORT = 3001

const app = express()
app.use(express.json())
app.use(cors())

app.post('/salvar-filmes', async (req, res) => {
    try {
      // Iterar sobre a lista de filmes e salvá-los no banco de dados
      for (const filmeData of filmes) {
        const filme = new Filme(filmeData);
        await filme.save();
      }
      res.status(201).json({ message: 'Filmes salvos com sucesso no MongoDB' });
    } catch (error) {
      console.error('Erro ao salvar filmes no MongoDB:', error);
      res.status(500).json({ error: 'Erro ao salvar filmes' });
    }
  });

// conectar com o mongodb

mongoose.connect('mongodb+srv://vsiago21:giEVRTaPC1ZTnP8s@cluster0.ik63tuv.mongodb.net/salvar-filmes', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
    .then(() => {
      console.log('Conexão com o MongoDB estabelecida com sucesso');
    })
    .catch((error) => {
      console.error('Erro ao conectar ao MongoDB:', error);
    });
  

// Rotas

app.get('/filmes', (req, res) => {
    return res.status(200).json(filmes)
})

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`))