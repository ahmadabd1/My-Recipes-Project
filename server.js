const express = require('express')
const router =require('./api/routes/route')
const path = require('path')


const app = express()
app.use(router)
app.use(express.static(path.join(__dirname,'dist')))
app.use(express.static(path.join(__dirname,'node_modules')))


const port = 3000
app.listen(port,function(req,res){
    console.log(`Running in Port ${port}...`)
})