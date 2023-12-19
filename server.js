const express = require('express')
const router =require('./api/routes/route')
const path = require('path')
const PORT = 3000;

const app = express()

app.use(express.static(path.join(__dirname,'dist')))
app.use(express.static(path.join(__dirname,'node_modules')))

app.use('/',router)


app.listen(PORT,function(req,res){
    console.log(`Running in Port ${PORT}...`)
})