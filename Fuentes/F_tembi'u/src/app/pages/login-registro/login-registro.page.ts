import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-registro',
  templateUrl: './login-registro.page.html',
  styleUrls: ['./login-registro.page.scss'],
})
export class LoginRegistroPage implements OnInit {

  email = '';
  password = '';
  password2 = '';

  constructor(public data: DataService, public route: Router) { }

  ngOnInit() {
  }

  onSubmitTemplate() {
    console.log('Form submit');
    // tslint:disable-next-line:prefer-const
    let igualdad = this.password.localeCompare(this.password2);
    if (igualdad === 0) {
      this.data.crearCuenta(this.email, this.password).subscribe((res) => {
        this.route.navigate(['/tabs/productos']);
      }, (error) => {
        console.error(error);
      });
    } else {
      console.log('Contrasenha no coinciden');
    }
  }
}
