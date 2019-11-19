'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();


//cargar rutas
var routes = require('./routes/routes');


//body parser
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


//configurar cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Access-Control-Allow-Credentials: true');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});


//rutas base
app.use('/api', routes);

module.exports = app;