import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup

  constructor(private formBuilder: FormBuilder){
    this.registerForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(4)]],
      email: ['', [
          Validators.required, Validators.email
        ]
      ],
      password: ['', [
          Validators.required, Validators.minLength(4), Validators.maxLength(12)
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

  onSubmit()
  {

    if(!this.registerForm.valid){
      alert('O formulario possui campos obrigatorios')
      return
    }

    console.log(this.registerForm.value)
  }

}
