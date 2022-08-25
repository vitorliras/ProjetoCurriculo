const express = require('express')
const app = express()
const conexao = require('./conexao') 
app.use(express.json())
const port = process.env.PORT || 5000
const userRoute = require('./routes/userRoute')
const path = require('path')
app.use('/api/user', userRoute)

if(process.env.MODE_ENV === 'production'){
    app.use('/', express.static('client/build'))
    app.get('*',(req, res)=>{
        res.sendFile(path.resolve(__dirname , 'client/build/index.html'))
    })
}
app.get('/',(req, res) => res.send(Hello))
app.listen(port, () => console.log(`port ${port}` ))