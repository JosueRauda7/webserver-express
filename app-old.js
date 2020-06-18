const http = require('http');
const colors = require('colors');

http.createServer( (req, res) => {
    res.writeHead(200, 
        {
            'Content-Type': 'application/json' 
        }
    );

    let salida = {
        nombre: 'Josué Rauda',
        edad: 20,
        url: req.url
    };

    if(req.url === '/')
        res.write(JSON.stringify(salida));
    // res.write('Hola mundo');
    res.end();
} )
.listen(8080);

console.log('Escuchando el puerto 8080'.cyan);