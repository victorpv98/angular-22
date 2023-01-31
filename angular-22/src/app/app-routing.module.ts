import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { AdvertenciaComponent } from './components/advertencia/advertencia.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { CanDesactivateGuard } from './can-desactivate.guard';
import { CanActivateGuard } from './can-activate.guard';

const routes: Routes = [
  {path:'', component: LoginComponent},
  {path:'login', component: LoginComponent, canDeactivate: [CanDesactivateGuard]},
  {path: 'advertencia', component: AdvertenciaComponent},
  {path: 'perfil', component: ProfileComponent, canActivate:[CanActivateGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
