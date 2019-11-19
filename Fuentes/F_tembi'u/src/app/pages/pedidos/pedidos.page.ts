import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.page.html',
  styleUrls: ['./pedidos.page.scss'],
})
export class PedidosPage implements OnInit {

  constructor(public data: DataService, public toastController: ToastController) {  }
  delete(item: any) {
    console.log('Antes de Eliminar', item);
    // tslint:disable-next-line:prefer-const
    let pos = this.data.pedidos.indexOf(item);
    this.data.pedidos.splice(pos, 1);
    console.log('Despues de Eliminar', this.data.pedidos);
  }

  onclick(id: string) {
    console.log(id);
    this.data.borrarPedido(id).subscribe((data) => {

      this.data.listaPedidos().subscribe((res) => {
        this.data.pedidos = [];
        // tslint:disable-next-line:no-string-literal
        this.data.pedidos = res['pedidos'];
      }, (error) => {
        console.error(error);
      });
    });
  }

  async presentToast() {
    const toast = await this.toastController.create({
      message: 'Guardado con Exito!.',
      duration: 2000
    });
    toast.present();
  }

  savePedido() {
    // tslint:disable-next-line:prefer-const
    for (let pedi of this.data.pedidos) {
      this.data.CreaPedidos(pedi).subscribe((data) => {
        console.log('Su Pedido se ha Guardado Correctamente!');
        this.presentToast();
        this.data.pedidos = [];
      }, (error) => {
        console.error(error);
      });
    }
  }

  ngOnInit() {

  }

}
