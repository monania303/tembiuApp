'use strict'

var Usuario = require('../models/usuarios');

//Consulta de todos los Usuarios / en caso que exista
function getUsuarios(req, res){
    Usuario.find({}).exec((err, usuario) => {
      if(err){
        res.status(500).send({
          menssage : 'Error en el servidor'
        });
      }else{
        if(usuario){
          res.status(200).send({
            usuario
          });
        }else{
          res.status(404).send({
            menssage : 'No hay usuarios'
          });
        }
      }
    });
  }
  

//metodo para guardar
function saveUsuarios(req, res){

    var users = new Usuario();
    var params = req.body;
    
      users.usuario = params.usuario;
      users.email =  params.email
      users.password = params.password;
  
      users.save((err, usuariosStored) => {
        if(err){
          res.status(500).send({
            menssage : 'Error en el servidor'
          });
        }else{
          if(usuariosStored){
            res.status(200).send({
              users : usuariosStored
            });
          }else{
            res.status(200).send({
              menssage : 'No se ha guardado el usuario'
            });
  
          }
        }
      });
   
  }

//Metodo para Actualizar la mierda que estamos haciendo
 function updateUsuario(req, res){
      var usuarioId = req.params.id;
      var update = req.body;

      Usuario.findByIdAndUpdate(usuarioId , update ,{new:true}, (err, usuarioUpDated) => {
            if(err){
                res.status(500).send({
                    message : 'ERROR EN EL SERVIDOR'
                });
            }else{
                if(usuarioUpDated){
                    res.status(200).send({
                        usuario : usuarioUpDated
                    });
                }else{
                    res.status(200).send({
                        message : 'No hay usuario'
                    });
                }
            }
      });
    }

//Metodo para Eliminar la mierda que estamos haciendo
function deleteUsuario(req, res){
     var usuarioId = req.params.id;
     console.log('usuario', usuarioId);

     Usuario.findByIdAndRemove(usuarioId, (err , usuarioRemoved) =>{
        if(err){
             res.status(500).send({
                message : 'Error en el servidor'
             });
        }else{
            if(usuarioRemoved){
                res.status(200).send({
                    usuario : usuarioRemoved
                });
            }else{
                res.status(200).send({
                    message : 'No hay usuario'
                });
            }
        }
     });
}


//Metodo para ingreso a la App
function getIngreso(req, res){
  var users = new Usuario();
  var params = req.body;

  if(params.email && params.password){
    users.password = params.password
    users.email = params.email;

    Usuario.find({'email': users.email, 'password': users.password }).exec((err, usuarioIngreso) => {
      if(err){
        res.status(500).send({
          message : 'Error en el servidor'
        });
      }else{
        if(usuarioIngreso){
          res.status(200).send({
            usuarioIngreso
          });
        }else{
          res,status(404).send({
            message : 'Cara nau tein usuarios'
          });
        }
      }
    });

  }else{
    res.status(200).send({
      message : 'Es necesario tener un Email y una contrasenha amigo'
    });
  }  
}

module.exports = {
     getUsuarios,
     saveUsuarios,
     updateUsuario,
     deleteUsuario,
     getIngreso
 };