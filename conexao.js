const mongoose = require('mongoose')

const URL = 'mongodb+srv://vitor:polosul@cluster0.tmhjjkx.mongodb.net/curriculo'

mongoose.connect(URL, {useUnifiedTopology:true, useNewUrlParser:true})

const conn = mongoose.connection

conn.on('connected', () =>{
    console.log("Mongo conectado com sucesso!")
})
conn.on('error', (erro) =>{
    console.log(erro)
})
