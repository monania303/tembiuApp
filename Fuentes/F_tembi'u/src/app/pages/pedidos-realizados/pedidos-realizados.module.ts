import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PedidosRealizadosPage } from './pedidos-realizados.page';

const routes: Routes = [
  {
    path: '',
    component: PedidosRealizadosPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PedidosRealizadosPage]
})
export class PedidosRealizadosPageModule {}
