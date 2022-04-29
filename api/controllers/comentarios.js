'use strict'
const Comentarios = require('../models/comentarios')

function getComentarios(req, res){
  Comentarios.find({},(err, comentarios)=>{
    if(err)return res.status(500).send({message: `Error al realizar la peticion ${err}`})
    if(!comentarios)return res.status(404).send({message:`el producto no existe`})
    res.status(200).json(comentarios)
  });
}
function getComentario(req, res){
  let comentarioId = req.params.commentId
  Comentarios.findById(comentarioId,(err, comentario)=>{
    if(err)return res.status(500).send({message: `Error al realizar la peticion ${err}`})
    if(!comentario)return res.status(404).send({message:`el producto no existe`})
    res.status(200).send({comentario})
  })
}
function saveComentario(req, res){
  let comentario = new Comentarios(req.body)
  comentario.save((err, pageStored)=>{
    if(err) res.status(500).send({message:`error al salvar la base de datos ${err}`})
    res.status(200).send({page: pageStored})
  });
}
function updateComentario(req, res){
  let comentarioId = req.params.commentId
  let update = req.body
  Comentarios.findByIdAndUpdate(comentarioId,update,(err, comentario)=>{
    if(err)res.status(500).send({message: `Error al actualizar el comentario ${err}`})
    res.status(200).send({comentario})
  });
}
function deleteComentario(req, res){
  let comentarioId = req.params.commentId
  Comentarios.findById(comentarioId,(err, comentario)=>{
    if(err)res.status(500).send({message: `Error al borrar el comentario ${err}`})
    comentario.remove(err => {
      if(err)res.status(500).send({message:`Error al borrar el comentario ${err}`})
      res.status(200).send({message:`el producto ha sido eliminado`})
    });

  });
}
function serchCommentsGroup(req, res){
  let comentarioId = req.params.commentId
  Comentarios.find({ pagina:  comentarioId}, (err, comentarios)=>{
    if(err)return res.status(500).send({message: `Error al realizar la peticion ${err}`})
    if(!comentarios)return res.status(404).send({message:`el comentario no existe`})
    res.status(200).json(comentarios)
  });
}
module.exports = {
  getComentarios,
  getComentario,
  updateComentario,
  deleteComentario,
  saveComentario,
  serchCommentsGroup
}
