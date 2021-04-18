const express = require('express');
const app = express();
const cors = require("cors");
const bodyParser = require('body-parser');
const clienteController= require("./public/routes/cliente.routes.js")


app.set('view engine','jade')
app.use(express.static('public'));
app.use(cors())
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())



app.use("/",clienteController)


app.get("/", function(req, res){
    res.sendFile(__dirname + "/public/pages/index.html");
})

/*
app.get("/clientes", function(req, res){
    res.sendFile(__dirname + "/public/pages/clientes.html");
})

*/

module.exports = app;