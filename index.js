const express = require('express');
const path=require('path');
require('dotenv').config();

//config DB
require('./database/config').dbConn();

//App de express
const app= express();

//Lectura y parse de body
app.use(express.json());

//rutas
app.use('/api/pedido',require('./router/auth'));

//app servidor
app.listen(process.env.PORT,(e)=>{
if(e) throw new Error(e)
console.log('Servidor corriendo en el puerto !', process.env.PORT);
});

//Path publico
const public= path.resolve(__dirname,'public');
app.use(express.static(public));