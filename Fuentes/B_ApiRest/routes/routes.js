'use strict'

var express = require('express');
var ProductosController = require('../controllers/productos');
var UsuariosController = require('../controllers/usuarios');
var PedidosController = require('../controllers/pedidos');
var api = express.Router();

//Productos
api.get('/productos', ProductosController.getProductos); //ruta que llama a todos los productos
api.post('/prod', ProductosController.saveProductos); //Guardar Productos
api.put('/producto/:id', ProductosController.updateProducto); //Actualizar Productos
api.delete('/producto/:id', ProductosController.deleteProducto); //Eliminar Productos

//Usuarios
api.get('/usuarios', UsuariosController.getUsuarios); //ruta que llama a todos los usuarios
api.post('/user', UsuariosController.saveUsuarios); //Guardar usuarios
api.put('/usuarios/:id', UsuariosController.updateUsuario); //Actualizar usuario
api.delete('/usuarios/:id', UsuariosController.deleteUsuario); //Eliminar usuarios
api.post('/usuarioIngreso', UsuariosController.getIngreso); //Ingreso a la App

//Pedidos
api.get('/pedidos', PedidosController.getPedidos); //ruta que llama a todos los Pedidos
api.post('/pedi', PedidosController.savePedidos); //Guardar Pedidos
api.put('/pedidos/:id', PedidosController.updatePedido); //Actualizar Pedido
api.delete('/pedidos/:id', PedidosController.deletePedido); //Eliminar Pedidos

module.exports = api;