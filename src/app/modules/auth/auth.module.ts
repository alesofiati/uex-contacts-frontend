import { CardComponent } from './../../components/card/card.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ButtonComponent } from 'src/app/components/button/button.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './pages/reset-password/reset-password.component';

//components
import { LabelComponent } from './../../components/label/label.component';
import { InputComponent } from './../../components/input/input.component';


@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ButtonComponent,
    InputComponent,
    LabelComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    CardComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule
  ],
  exports: [ButtonComponent, InputComponent, LabelComponent, CardComponent]
})
export class AuthModule { }
