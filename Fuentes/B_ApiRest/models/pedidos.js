'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PedidosSchema = new Schema({
    id: String,
    nombre: String,
    imagen: String,
    precio: String,
    usuario: String
});

module.exports = mongoose.model('Pedidos', PedidosSchema);