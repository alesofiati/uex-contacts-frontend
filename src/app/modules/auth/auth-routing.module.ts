import { PageNotFoundComponent } from './../../components/page-not-found/page-not-found.component';
import { ResetPasswordComponent } from './pages/reset-password/reset-password.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';

const routes: Routes = [
  { path: 'login', title: 'Login', component:LoginComponent },
  { path: 'register', title: 'Cadastro', component:RegisterComponent },
  { path: 'forgot-password', title: 'Esqueceu a Senha', component:ForgotPasswordComponent },
  { path: 'reset-password/token/:token', title: 'Recuperar Senha', component:ResetPasswordComponent },
  { path: '**', title: 'Teste', component:PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
