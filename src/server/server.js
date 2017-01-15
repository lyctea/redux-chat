import express from 'express'
import { Server } from 'http'

var app = express()
var http = Server( app )

//config
var rootPath = require('path').normalize(__dirname + '/../../');
app.set('views', __dirname + '/views')
app.set('view engine','ejs')
app.use(express.static(rootPath + "/public"))

app.get("/",(req, res)=>{
    res.send("hello world!")
})

http.listen(3000,()=>{
    console.log("listening on port 3000")
})