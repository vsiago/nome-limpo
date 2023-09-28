const mongoose = require('mongoose');

const filmeSchema = new mongoose.Schema({
  // Defina os campos do documento aqui
  titulo: String,
  diretor: String,
  anoLancamento: Number,
  // Adicione mais campos conforme necessário
});

const Filme = mongoose.model('Filme', filmeSchema);

module.exports = Filme;