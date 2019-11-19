import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  email = '';
  password = '';
  usuarios: any = {};
  constructor(public dato: DataService, public route: Router) { }

  ingresar() {
    this.dato.ingresar(this.email, this.password).subscribe((data) => {

      // tslint:disable-next-line:no-string-literal
      this.usuarios = data['usuarioIngreso'];

      if (this.usuarios.length != null) {
        // tslint:disable-next-line:no-shadowed-variable
        this.dato.listaProductos().subscribe((data) => {
          this.dato.productos = [];
          // tslint:disable-next-line:no-string-literal
          this.dato.productos = data['producto'];
          console.log(this.dato.productos);
          this.route.navigate(['/tabs/productos']);
        }, (error) => {
          console.error(error);
        });
      } else {
        console.log('No existe');
      }
    });
  }

  ngOnInit() {
  }

}
