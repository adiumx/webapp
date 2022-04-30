'use strict'

const port = process.env.PORT || 3000
const mongoose = require('mongoose')
const app = require('./app')


mongoose.connect(port, (err, res)=>{
  if(err) throw err
  console.log('conección a la base de datos establecida')
  app.listen(port, ()=>{
    console.log(`corriendo en http://localhost:${port}`)
  })
})


