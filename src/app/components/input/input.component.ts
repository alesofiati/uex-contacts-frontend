import { FormControl } from '@angular/forms';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})

export class InputComponent {
  @Input() control: FormControl
  @Input() name:string = 'default'
  @Input() placeholder:string = ''
  @Input() type:string = 'text'
  @Input() required:boolean = false
  @Input() readonly:boolean = false

  constructor()
  {
    this.control = new FormControl()
  }

  displayErrors() {
    const { touched, errors } = this.control;
    return touched && errors;
  }

  display()
  {
    let error = !this.control.valid && this.control.touched
    return {
      "input-control": !error,
      "input-control-error": error
    }
  }

  fieldName(): string
  {
    switch (this.name) {
      case 'name':
        return 'nome'
      break;

      case 'password':
        return 'senha'
      break;

      case 'password_confirmation':
        return 'confirmar senha'
      break;

      case 'email':
        return 'e-mail'
      break;

      default:
        return ''
      break;
    }
  }

}
