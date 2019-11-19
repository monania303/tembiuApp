'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = 3801;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/Tembiu', {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
    console.log('La conexion a Tembiu se ha realizado correctamente');
    app.listen(port, ()=> {
        console.log('El servidor esta corriendo en el puerto:3801');
    })
})
.catch(err=> console.log(err))