import { ResponseError } from './../../../../interfaces/response-error';
import { AuthService } from './../../service/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { ForgotPassword } from 'src/app/interfaces/forgot-password';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {

  forgotPasswordForm: FormGroup

  validationApi: string[] = []

  error: boolean = false
  message: string = ''
  color: string = 'bg-red-500'

  constructor(private formBuilder: FormBuilder, private authService: AuthService){
    this.forgotPasswordForm = this.formBuilder.group({
      email: ['', [
        Validators.required, Validators.email
      ]]
    })
  }

  onSubmit(): void
  {
    this.error = false
    this.message = ''

    this.validationApi = []

    if(!this.forgotPasswordForm.valid){
      Swal.fire({
        icon: 'error',
        text: 'O formulario possui campos obrigatorios.'
      })
      return
    }

    let data: ForgotPassword = this.forgotPasswordForm.value;

    this.authService.forgotePassword(data).subscribe(
      response => {
        this.forgotPasswordForm.reset()
        this.error = true
        this.message = response.message
        this.color = 'bg-green-500'
      },
      error => {
        let response: ResponseError = error.error

        switch (error.status) {
          case 422:
            let data: any = response.data
            Object.keys(data).forEach(key => {
              this.validationApi.push(data[key][0])
            })
          break;

          case 404:
            this.error = true
            this.message = response.message ?? 'Recurso não encontrado'
          break;

          default:
            this.error = true
            this.message = 'Não foi possivel processar a sua solicitação'
          break;
        }

      }
    )
  }

}
