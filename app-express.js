
const express = require('express');
const app = express();
const colors = require('colors');

const port = 8080;

console.log('Inicia Programa Express');

app.use(express.static('public'));

//Las rutas estáticas tienen prioridad sobre rutas dinamicas
//public/index.html tiene prioridad sobre '/'
//get '/' nunca se ejecutará
app.get('/', function (req, res) {
  res.send('<h1>Hello World<h1>');
});

app.get('/hola-express', function (req, res) {
    res.send('<h1>Hello World Express<h1>');
});

//las rutas estáticas no deben programarse
//las rutas estaticas tienen prioridad sobre las dinamicas
///get /hola-estatico nunca se ejecutará
app.get('/hola-estatico', function (req, res) {
    res.send('Hola mundo estatico');
});

app.get('*', function (req, res) {
    //Respuesta dinamica
    //res.send('404 | Page not found');

    //Respuesta estática
    res.sendFile(__dirname+'/public/404.html');
});

app.listen(port);

console.log('Escuchando ',colors.cyan(port));
