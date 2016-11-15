import { Component, TemplateRef } from '@angular/core';

@Component({
  
  selector: 'app-oneway-expression',
  template: `
  {{greeting}}<br>
  <input type="text" [value]="greeting">
  <input type="text" bind-value="greeting">
  <input type="text" [attr.value]="greeting">`
})
export class OnewayExpressionComponent {
  
  greeting: string="hello";
  
}