'use strict'
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PaginasSchema = Schema({
  titulo:String,
  descripcion:String,
});
module.exports= mongoose.model('Paginas', PaginasSchema)
