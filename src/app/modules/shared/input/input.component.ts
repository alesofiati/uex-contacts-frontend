import { FormControl } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';

interface FieldName {
  name: string,
  value: string
}

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})

export class InputComponent implements OnInit {
  @Input() control: FormControl
  @Input() name:string = 'default'
  @Input() placeholder:string = ''
  @Input() type:string = 'text'
  @Input() required:boolean = false
  @Input() readonly:boolean = false

  fieldName: string = ''

  ngOnInit(): void {
    this.changeFieldDisplayName()
  }

  constructor()
  {
    this.control = new FormControl()
  }

  isValid() {
    return !this.control.valid && this.control.touched
  }

  displayCss()
  {
    let error = this.isValid()
    return {
      "input-control": !error,
      "input-control-error": error
    }
  }

  private changeFieldDisplayName(): void
  {
    let defaultInputNames: FieldName[] = [
      {name: 'name', value: 'nome'},
      {name: 'email', value: 'email'},
      {name: 'password', value: 'senha'},
      {name: 'password_confirmation', value: 'confirmar senha'}
    ]

    let result: FieldName[] = defaultInputNames.filter((field) => {
      return field.name == this.name
    })

    if(result.length){
      this.fieldName = result[0].value
      return
    }
    this.fieldName = ''
    return
  }

}
