import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  usuarios: any[] = [];
  productos: any[] = [];
  pedidos: any[] = [];
  pedidosR: any[] = [];

  constructor(private http: HttpClient) { }
  /*para registrar cuentas*/
  crearCuenta(email: string, password: string) {

    const data = {
      'email': email,
      'password': password
    };
    const url = 'http://localhost:3801/api/user';


    return this.http.post(url, data);
  }

  // para listar usuarios
  listaUsuarios() {
    // tslint:disable-next-line:prefer-const
    let url = 'http://localhost:3801/api/usuarios';

    return this.http.get(url);
  }

  // para ingresar con email y seña
  ingresar(email: string, password: string) {
    const data = {
      email,
      password
    };
    const url = 'http://localhost:3801/api/usuarioIngreso';

    return this.http.post(url, data);
  }

  // borrar usuario
  borrarUsuario(id: string) {
    const url = 'http://localhost:3801/api/usuarios/' + id;

    return this.http.delete(url);
  }

  // para listar producto
  listaProductos() {
    const url = 'http://localhost:3801/api/productos';

    return this.http.get(url);
  }

  // borrar producto
  borrarProducto(id: string) {
    const url = 'http://localhost:3801/api/productos/' + id;

    return this.http.delete(url);
  }

  // para listar pedidos
  listaPedidos() {
    const url = 'http://localhost:3801/api/pedidos';

    return this.http.get(url);
  }
  // SavePedidos
  CreaPedidos(pedi: any) {
    const data = {
      id: pedi.id,
      nombre: pedi.nombre,
      imagen: pedi.imagen,
      precio: pedi.precio
    };
    const url = 'http://localhost:3801/api/pedi/';

    return this.http.post(url, data);
  }

  // borrar pedido
  borrarPedido(id: string) {
    const url = 'http://localhost:3801/api/pedidos/' + id;

    return this.http.delete(url);
  }

}
