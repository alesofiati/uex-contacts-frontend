import { SessionService } from './../session/session.service';
import { RouterService } from '../router.service';
import { User } from '../../interfaces/user';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private router: RouterService,
    private session: SessionService
  ) {}


  sessionInit(user: User, token: string): void
  {
    this.setUser(user)
    this.setToken(token)
    this.router.redirect('/')
  }

  user(): User
  {
    return this.getUser()
  }

  private getUser(): User
  {
    let userLocalStorage:any = this.session.get('user')
    let user: User = JSON.parse(userLocalStorage)
    return user
  }

  private setUser(user: User): void
  {
    this.session.set('user', JSON.stringify(user))
  }

  private setToken(token: string): void
  {
    this.session.set('token', token)
  }

  isLogged(): boolean
  {
    if(this.getUser()?.id){
      return true
    }
    this.router.redirect('login')
    return false
  }

  logout(): void
  {
    this.session.flush()
    this.router.redirect('login')
  }

}
