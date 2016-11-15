import { Component } from '@angular/core';

@Component({
  selector: 'app-template-reference-variables',
  template: `
  <input #num1 type="number" value="{{init.num1}}" (input)="0">  + 
  <input #num2 type="number" value="{{init.num2}}" (input)="0">
  = {{num1.valueAsNumber + num2.valueAsNumber}}<br>

  <input ref-number1 type="number" value="{{init.num1}}" (input)="0">  + 
  <input ref-number2 type="number" value="{{init.num2}}" (input)="0">
  = {{number1.valueAsNumber + number2.valueAsNumber}}`
})
export class TemplateReferenceVariablesComponent {
  
  private get init(): any {
    return { num1: 10, num2: 20 }
  }

}