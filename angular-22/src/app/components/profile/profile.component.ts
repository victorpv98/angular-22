import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {

  mostrar = [
    {
      firstN:'Test',
      lastN: 'User',
      email:'testuser@contoso.com'
    }
  ];

}
