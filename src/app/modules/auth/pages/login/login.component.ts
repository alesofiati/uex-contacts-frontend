import { User } from './../../../shared/interfaces/user';
import { AuthService } from './../../service/auth.service';
import { AuthService as Autenticated } from './../../../shared/service/auth/auth.service';
import { Login } from './../../../../interfaces/login';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {

  form: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private autenticated: Autenticated
  ) {

    this.form = this.formBuilder.group({
      email: ['', [
          Validators.required, Validators.email
        ]
      ],
      password: ['', [
        Validators.required, Validators.min(6)
        ]
      ]
    })

  }

  onSubmit(): void
  {

    let data: Login = this.form.value
    this.authService.login(data).subscribe(
      response => {
        let token: string = response.data.token
        let user: User = response.data.user
        this.autenticated.sessionInit(user, token)
      },
      error => {

      }
    )
  }

}
