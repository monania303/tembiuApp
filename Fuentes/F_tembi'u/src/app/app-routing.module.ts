import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  { path: '', redirectTo: 'presentacion', pathMatch: 'full' },
  { path: 'presentacion', loadChildren: './pages/presentacion/presentacion.module#PresentacionPageModule' },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'login-registro', loadChildren: './pages/login-registro/login-registro.module#LoginRegistroPageModule' },
  { path: 'productos', loadChildren: './pages/productos/productos.module#ProductosPageModule' },
  { path: 'pedidos', loadChildren: './pages/pedidos/pedidos.module#PedidosPageModule' },
  { path: 'pedidos-realizados', loadChildren: './pages/pedidos-realizados/pedidos-realizados.module#PedidosRealizadosPageModule' },
  { path: 'tabs', loadChildren: './pages/tabs/tabs.module#TabsPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
