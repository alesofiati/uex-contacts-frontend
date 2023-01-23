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
      name: ['', Validators.required],
      email: ['', [
          Validators.required, Validators.email
        ]
      ],
      password: ['', Validators.required],
      password_confirmation: ['', [
          Validators.required, Validators.minLength(4), Validators.maxLength(8)
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
