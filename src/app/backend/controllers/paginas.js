'use strict'
const Paginas = require('../models/paginas')

function getPaginas(req, res){
  Paginas.find({},(err, paginas)=>{
    if(err)return res.status(500).send({message: `Error al realizar la peticion ${err}`})
    if(!paginas)return res.status(404).send({message:`el producto no existe`})
    res.status(200).json(paginas)
  })
}
function getPagina(req, res){
  let paginaId = req.params.pageId
  Paginas.findById(paginaId,(err, pagina)=>{
    if(err)return res.status(500).send({message: `Error al realizar la peticion ${err}`})
    if(!pagina)return res.status(404).send({message:`el producto no existe`})
    res.status(200).send({pagina})
  })
}
function savePagina(req, res){
  let pagina = new Paginas()
  pagina.titulo= req.body.titulo
  pagina.descripcion = req.body.descripcion
  pagina.save((err, pageStored)=>{
    if(err) res.status(500).send({message:`error al salvar la base de datos ${err}`})
    res.status(200).send({page: pageStored})
  })
}
function updatePagina(req, res){
  let paginaId = req.params.pageId
  let update = req.body
  Paginas.findByIdAndUpdate(paginaId,update,(err, pagina)=>{
    if(err)res.status(500).send({message: `Error al actualizar la pagina ${err}`})
    res.status(200).send({pagina})
  })
}
function deletePagina(req, res){
  let paginaId = req.params.pageId
  Paginas.findById(paginaId,(err, pagina)=>{
    if(err)res.status(500).send({message: `Error al borrar la pagina ${err}`})
    pagina.remove(err => {
      if(err)res.status(500).send({message:`Error al borrar la pagina ${err}`})
      res.status(200).send({message:`el producto ha sido eliminado`})
    })

  })
}
module.exports = {
  getPaginas,
  getPagina,
  updatePagina,
  deletePagina,
  savePagina
}
