import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { LabelComponent } from './label/label.component';
import { ButtonComponent } from './button/button.component';
import { CardComponent } from './card/card.component';
import { InputComponent } from './input/input.component';
import { AlertComponent } from './alert/alert.component';
import { AuthService } from './service/auth/auth.service';



@NgModule({
  declarations: [
    LabelComponent,
    ButtonComponent,
    CardComponent,
    InputComponent,
    AlertComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    LabelComponent,
    ButtonComponent,
    CardComponent,
    InputComponent,
    AlertComponent
  ],
  providers: [AuthService]
})
export class SharedModule { }
