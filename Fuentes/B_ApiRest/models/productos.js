'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var ProductosSchema = new Schema({
    nombre: String,
    imagen: String,
    precio: String
})

module.exports = mongoose.model('Productos', ProductosSchema);