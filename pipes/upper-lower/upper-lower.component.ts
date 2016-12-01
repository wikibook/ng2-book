import { Component } from '@angular/core';

@Component({
  selector: 'app-upper-lower',
  template: `<div>    
    <input [(ngModel)]="str" type="text">
    <p>소문자 : {{str | lowercase}}</p>
    <p>대문자 : {{str | uppercase}}</p>
  </div>`
})
export class UpperLowerComponent {
  str: string="abcDEF";  
}