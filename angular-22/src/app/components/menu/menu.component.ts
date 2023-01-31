import { Component } from '@angular/core';
import { AuthentiService } from 'src/app/services/authenti.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  usuariologueado = false;
  constructor(public autenti: AuthentiService){}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.usuariologueado = this.autenti.isLoggedIn('');
    this.autenti.cambioLogStatus$.subscribe(
      (logeo: boolean)=>this.usuariologueado = logeo
    )
  }

  logout(){
    this.autenti.logout();
  }
}
