import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  { path: '', redirectTo: '/presentacion', pathMatch: 'full' },
  {
    path: '',
    component: TabsPage,
    children: [
      { path: 'login-registro', loadChildren: '../login-registro/login-registro.module#LoginRegistroPageModule' },
      { path: 'login', loadChildren: '../login/login.module#LoginPageModule' },
      { path: 'productos', loadChildren: '../productos/productos.module#ProductosPageModule' },
      { path: 'pedidos', loadChildren: '../pedidos/pedidos.module#PedidosPageModule' },
      { path: 'pedidos-realizados', loadChildren: '../pedidos-realizados/pedidos-realizados.module#PedidosRealizadosPageModule' }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TabsPage]
})
export class TabsPageModule { }
