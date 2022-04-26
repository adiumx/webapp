'use strict'
const express = require('express')

const bodyParser = require('body-parser')
const PageCtrl = require('./controllers/paginas')
const CommentCtrl = require('./controllers/comentarios')
const app = express()
const cors = require('cors')
app.use(cors())
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.get('/Paginas', PageCtrl.getPaginas)
app.get('/Paginas/:pageId', PageCtrl.getPagina)
app.post('/Paginas', PageCtrl.savePagina)
app.put('/Paginas/:pageId', PageCtrl.updatePagina)
app.delete('/Paginas/:pageId', PageCtrl.deletePagina)

app.get('/Comentarios', CommentCtrl.getComentarios)
app.get('/Comentarios/:commentId', CommentCtrl.getComentario)
app.post('/Comentarios', CommentCtrl.saveComentario)
app.put('/Comentarios/:commentId', CommentCtrl.updateComentario)
app.delete('/Comentarios/:commentId', CommentCtrl.deleteComentario)
app.get('/Comentarios/grupo/:commentId', CommentCtrl.serchCommentsGroup)
module.exports = app
