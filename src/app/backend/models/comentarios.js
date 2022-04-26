'use strict'
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ComentariosSchema = Schema({
  comentario:String,
  pagina: mongoose.Schema.Types.ObjectId
});
module.exports= mongoose.model('Comentarios', ComentariosSchema)
