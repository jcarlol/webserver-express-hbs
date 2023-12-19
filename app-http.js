
const http = require('http');

console.log('Inicia Programa HTTP');

http.createServer((req,res)=>{
    res.setHeader('Content-Type','application/csv');
    res.setHeader('Content-Disposition', 'attachement; filename=lista.csv');
    res.writeHead(200);
    res.write( 'No, Nombre\n');
    res.write( '1, Juan\n');
    res.write( '2, Jose\n');
    res.write( '3, Maria\n');
    res.write( '3, Lilian\n');
    res.end();
}).listen(8080);

console.log('Escuchando 8080');
