'use strict'

var Producto = require('../models/productos');

//Consulta de todos los Productos / en caso que exista
function getProductos(req, res) {

    Producto.find({}).exec((err, producto) => {
        if (err) {
            res.status(500).send({
                menssage: 'Error en el servidor'
            });
        } else {
            if (producto) {
                res.status(200).json({
                    producto
                });
            } else {
                res.status(404).send({
                    menssage: 'No hay productos'
                });
            }
        }
    });
}

//metodo para guardar
function saveProductos(req, res) {

    var prod = new Producto();
    var params = req.body;

    prod.id = params.id;
    prod.nombre = params.nombre;
    prod.imagen = params.imagen;
    prod.precio = params.precio;

    prod.save((err, productosStored) => {
        if (err) {
            res.status(500).send({
                menssage: 'Error en el servidor'
            });
        } else {
            if (productosStored) {
                res.status(200).send({
                    prod: productosStored
                });
            } else {
                res.status(200).send({
                    menssage: 'No se ha guardado el producto'
                });

            }
        }
    });

}

//Metodo para Actualizar el Producto
function updateProducto(req, res) {
    var productoId = req.params.id;
    var update = req.body;

    Producto.findByIdAndUpdate(productoId, update, { new: true }, (err, productoUpDated) => {
        if (err) {
            res.status(500).send({
                message: 'ERROR EN EL SERVIDOR'
            });
        } else {
            if (productoUpDated) {
                res.status(200).send({
                    producto: productoUpDated
                });
            } else {
                res.status(200).send({
                    message: 'No hay Producto'
                });
            }
        }
    });
}

//Metodo para Eliminar Producto
function deleteProducto(req, res) {
    var productoId = req.params.id;
    console.log('producto', productoId);

    Producto.findByIdAndRemove(productoId, (err, productoRemoved) => {
        if (err) {
            res.status(500).send({
                message: 'Error en el servidor'
            });
        } else {
            if (productoRemoved) {
                res.status(200).send({
                    producto: productoRemoved
                });
            } else {
                res.status(200).send({
                    message: 'No hay producto'
                });
            }
        }
    });
}

module.exports = {
    getProductos,
    saveProductos,
    updateProducto,
    deleteProducto
};