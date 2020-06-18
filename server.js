const express = require('express')
const app = express()
const colors = require('colors');
const hbs = require('hbs');
require('./hbs/helpers'); //Ejecuciones que se ejecutan y se registran en hbs

//Puerto que me da el servidor o usar un puerto local
const puerto = process.env.PORT || 3000;

//Servidor con contenido estático
app.use( express.static( __dirname + '/public' ) );

//EXPRESS HBS Engine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');

app.get( '/', (req, res) => {

    res.render('home', {
        nombre: 'Josué',
        anio: `${new Date().getFullYear()}`,
        pageName: 'Home'
    });

} );

app.get( '/about', (req, res) => {

    res.render('about', {
        pageName: 'About'
    });

} );

app.listen(puerto, () => {
    console.log(`Escuchando peticiones en el puerto ${puerto}.`.cyan);
})