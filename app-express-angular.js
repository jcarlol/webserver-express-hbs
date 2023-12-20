
const express = require('express');
const app = express();
const colors = require('colors');
require('dotenv').config();

const port = process.env.port;

console.log('Inicia Programa Express');

app.use(express.static('angular-app'));

app.get('*', function (req, res) {
    //Respuesta dinamica
    //res.send('404 | Page not found');

    //Respuesta estática
    res.sendFile(__dirname+'/public/404.html');
});

app.listen(port);

console.log('Escuchando ',colors.cyan(port));
