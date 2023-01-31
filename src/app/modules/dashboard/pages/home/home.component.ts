import { AuthService as Autenticated } from './../../../shared/service/auth/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(
    private autenticated: Autenticated
  ){}

  logout(): void
  {
    let result = confirm('Você deseja sair?')
    if(result){
      //integrar logou com api
      this.autenticated.logout()
    }

  }

}
