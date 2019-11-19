import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { isPromise } from 'q';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
})
export class ProductosPage implements OnInit {

  constructor(public data: DataService) {
    this.Listar();
  }

  click(obj: any) {
    this.data.pedidos.push(obj);
  }

  Listar() {
    this.data.listaProductos().subscribe((data) => {
      this.data.productos = [];
      // tslint:disable-next-line:no-string-literal
      this.data.productos = data['producto'];
    }, (error) => {
      console.error(error);
    });

  }
  ngOnInit() {
  }

}
