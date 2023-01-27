import { ResponseError } from './../../../../interfaces/response-error';
import { AuthService } from './../../service/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup

  validationApi: string[] = []

  constructor(private formBuilder: FormBuilder, private authService: AuthService){
    this.registerForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      email: ['', [
          Validators.required, Validators.email
        ]
      ],
      password: ['', [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(12)
        ]
      ],
      password_confirmation: ['', [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(12)
        ]
      ]
    })
  }

  ngOnInit():void {}

  onSubmit(): void
  {
    this.validationApi = []
    if(!this.registerForm.valid){
      alert('O formulario possui campos obrigatorios')
      return
    }

    let data = this.registerForm.value

    this.authService.register(data)
      .subscribe(response => {
        this.registerForm.reset()
        Swal.fire({
          icon: 'success',
          text: 'Cadastro Realizado com sucesso'
        })
      },
      error => {

        if(error.status == 422){
          let validations: ResponseError = error.error
          let data: any = validations.data
          Object.keys(validations.data).forEach(key => {
            this.validationApi.push(data[key][0])
          })
          return
        }

        Swal.fire({
          icon: 'error',
          text: 'Não foi possivel processar a sua solicitação'
        })

      })
  }

}
