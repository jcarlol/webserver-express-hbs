const express = require('express');
const app = express();
const colors = require('colors');
require('dotenv').config();

app.set('view engine', 'hbs');

const hbs = require('hbs');

hbs.registerPartials(__dirname + '/views/partials', function (err) {if(err) console.log(err)});

const port = process.env.HTTP_PORT;

console.log('Inicia Programa Express');

app.use(express.static('hbs-roadtrip'));


app.get('/', function (req, res) {
    res.render('home',{
        nombre: 'José Carlo',
        curso: 'Curso Legacy JS'
    });
});

app.get('/generic', function (req, res) {
    res.render('generic',{
        nombre: 'José Carlo',
        curso: 'Curso Legacy JS'
    });
});

app.get('/elements', function (req, res) {
    res.render('elements',{
        nombre: 'José Carlo',
        curso: 'Curso Legacy JS'
    });
});

app.listen(port);

console.log('Escuchando ',colors.cyan(port));
