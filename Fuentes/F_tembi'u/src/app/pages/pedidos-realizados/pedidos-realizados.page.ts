import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Component({
  selector: 'app-pedidos-realizados',
  templateUrl: './pedidos-realizados.page.html',
  styleUrls: ['./pedidos-realizados.page.scss']
})

export class PedidosRealizadosPage implements OnInit {
  constructor(public datas: DataService) {
    this.Listar();
  }

  Listar() {
    this.datas.listaPedidos().subscribe((data) => {
      this.datas.pedidosR = [];
      // tslint:disable-next-line:no-string-literal
      this.datas.pedidosR = data['pedido'];
    }, (error) => {
      console.error(error);
    });

  }

  ngOnInit() {
  }
}