'use strict'

var Pedido = require('../models/pedidos');

function pruebas(req, res) {
    res.status(200).send({
        message: 'esta es mi ruta de prueba en la api_TembiuApp rest full con mongo y nodejs'
    });
}

//Consulta de todos los Pedidos / en caso que exista
function getPedidos(req, res) {

    Pedido.find({}).populate('idUsuario', 'nombre')
        .exec((err, pedido) => {
            if (err) {
                res.status(500).send({
                    menssage: 'Error en el servidor'
                });
            } else {
                if (pedido) {
                    res.status(200).json({
                        pedido
                    });
                } else {
                    res.status(404).send({
                        menssage: 'No hay pedidos'
                    });
                }
            }
        });
}


//metodo para guardar
function savePedidos(req, res) {

    var pedi = new Pedido();
    var params = req.body;

    pedi.id = params.id;
    pedi.nombre = params.nombre;
    pedi.imagen = params.imagen;
    pedi.precio = params.precio;

    pedi.save((err, pedidosStored) => {
        if (err) {
            res.status(500).send({
                menssage: 'Error en el servidor'
            });
        } else {
            if (pedidosStored) {
                res.status(200).send({
                    pedi: pedidosStored
                });
            } else {
                res.status(200).send({
                    menssage: 'No se ha guardado el pedido'
                });

            }
        }
    });

}


//Metodo para Actualizar el Pedido
function updatePedido(req, res) {
    var pedidoId = req.params.id;
    var update = req.body;

    Pedido.findByIdAndUpdate(pedidoId, update, { new: true }, (err, pedidosUpDated) => {
        if (err) {
            res.status(500).send({
                message: 'ERROR EN EL SERVIDOR'
            });
        } else {
            if (pedidosUpDated) {
                res.status(200).send({
                    pedido: pedidosUpDated
                });
            } else {
                res.status(200).send({
                    message: 'No hay pedido registrado'
                });
            }
        }
    });
}

//Metodo para Eliminar Pedido
function deletePedido(req, res) {
    var pedidoId = req.params.id;
    console.log('pedido', pedidoId);

    Pedido.findByIdAndRemove(pedidoId, (err, pedidoRemoved) => {
        if (err) {
            res.status(500).send({
                message: 'Error en el servidor'
            });
        } else {
            if (pedidoRemoved) {
                res.status(200).send({
                    pedido: pedidoRemoved
                });
            } else {
                res.status(200).send({
                    message: 'No hay pedido'
                });
            }
        }
    });
}

module.exports = {
    pruebas,
    getPedidos,
    savePedidos,
    updatePedido,
    deletePedido
};