import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {
  @Input() name:string = 'default'
  @Input() placeholder:string = 'Your description'
  @Input() type:string = 'text'
}
