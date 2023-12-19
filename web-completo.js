const express = require('express');
const app = express();
const colors = require('colors');

const port = 8080;

console.log('Inicia Programa Express');

app.use(express.static('templated-roadtrip'));


app.get('/generic', function (req, res) {
    res.sendFile(__dirname+'/templated-roadtrip/generic.html');
});

app.get('/elements', function (req, res) {
    res.sendFile(__dirname+'/templated-roadtrip/elements.html');
});

app.listen(port);

console.log('Escuchando ',colors.cyan(port));
