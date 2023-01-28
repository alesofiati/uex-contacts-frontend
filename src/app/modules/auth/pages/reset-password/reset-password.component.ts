import { RouterService } from './../../../shared/service/router.service';
import { ResponseSuccess } from './../../../../interfaces/response-success';
import { ResetPassword } from './../../../../interfaces/reset-password';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';
@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  token:string|null = ''
  form: FormGroup
  validationApi: string[] = []

  message:string = ''
  color:string = 'bg-red-500'
  showMessage:boolean = false

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private routerService: RouterService
  ){
    this.form = this.formBuilder.group({
      email: ['', [
          Validators.required, Validators.email
        ]
      ],
      password: ['', [
          Validators.required, Validators.minLength(4), Validators.maxLength(12)
        ]
      ],
      password_confirmation: ['', [
          Validators.required, Validators.minLength(4), Validators.maxLength(12)
        ]
      ]
    })
  }

  ngOnInit(): void {
    this.token = this.route.snapshot.paramMap.get('token')
  }

  onSumit(): void
  {

    let data: ResetPassword = {
      ...this.form.value,
      token: this.token
    }

    this.authService.resetPassword(data).subscribe(
      response => {
        this.form.reset()
        this.message = response.message
        this.showMessage = true;
        this.color = 'bg-green-500'
        setTimeout(() => {
          this.routerService.redirect('login')
        }, (1000 * 2))
      },
      error => {
        let response: ResponseSuccess = error.error
        switch (error.status) {
          case 422:
            let data: any = response.data
            Object.keys(data).forEach(key => {
              this.validationApi.push(data[key][0])
            })
          break;

          default:
            this.message = response.message ?? 'Não foi possivel processar a sua solicitação'
            this.showMessage = true;
          break;
        }
      }
    )

  }

}
