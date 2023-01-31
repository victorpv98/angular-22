import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentiService } from '../../services/authenti.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private  authentication: AuthentiService, private route: Router){}


  redireccion='';

  name: string = '';
  password='';

  userDate = 'AD';
  pass = '123456';

  enviado=false;

  login(){
    if(this.name==this.userDate && this.password==this.pass){
      console.log("usuario correcto");
      this.authentication.login();
      this.redireccion = this.authentication.urlUsuarioIntentandoAcceder;
      this.authentication.urlUsuarioIntentandoAcceder = '';
      this.route.navigate([this.redireccion]);
      this.enviado=true;
    }else{
      console.log("Coloque bien su usuario");
      return;
    }
  }


  SalirDeRuta():Observable<boolean>|boolean{
    if(!this.name || this.enviado){
      return true;
    }
    return confirm("¿Desea abandonar el formulario? \n Perdera todos los datos!!");
  }
}
