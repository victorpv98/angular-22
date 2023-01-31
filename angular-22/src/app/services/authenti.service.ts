import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthentiService {

  constructor() { }

  readonly  estaLogueado = 'Logueado';
  public urlUsuarioIntentandoAcceder = '';

  public cambioLogStatusSujeto = new Subject<boolean>();
  public cambioLogStatus$ = this.cambioLogStatusSujeto.asObservable();

  // funcion para el logeo
  login(){
    localStorage.setItem(this.estaLogueado, 'true');
    this.cambioLogStatusSujeto.next(true);
  }


  logout(){
    localStorage.removeItem(this.estaLogueado);
    this.cambioLogStatusSujeto.next(false);
  }

  isLoggedIn(url: string){
    const Logeado = localStorage.getItem(this.estaLogueado);
    if(!Logeado){
      this.urlUsuarioIntentandoAcceder=url;
      return false;
    }
    return true;
  }
}
