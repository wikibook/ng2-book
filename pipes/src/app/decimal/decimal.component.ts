import { Component } from '@angular/core';

@Component({
  selector: 'app-decimal',
  template: `
    <div>
    <h1>e : {{e}}</h1>
    (1.1-2) : {{e | number:'1.1-1'}}<br>
    (1.1-2): {{e | number:'1.1-2'}}<br>
    (1.1-3): {{e | number:'1.1-3'}}</div>
    <div>
    <h1>pi : {{pi}}</h1>
    (3.1-1): {{pi | number:'3.1-1'}}<br>
    (3.1-2): {{pi | number:'3.1-2'}}<br>
    (3.1-3): {{pi | number:'3.1-3'}}</div>`
})
export class DecimalComponent {
  e: number = 2.7182;
  pi: number = 3.141;
}
