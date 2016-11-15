import { Component } from '@angular/core';

@Component({
  selector: 'app-currency',
  template: `
      <p>01 - {{10000.125 | currency:'KRW'}}</p>
      <p>02 - {{10000.125 | currency:'KRW':true}}</p>      
      <p>03 - {{10000.125 | currency:'KRW':false}}</p>      
      <p>04 - {{1.005 | currency:'USD':true:'1.1-3'}}</p>
      <p>05 - {{1.005 | currency:'USD':true:'1.3-3'}}</p>
      <p>06 - {{1.005 | currency:'USD':true:'1.1-2'}}</p>
      <p>07 - {{1.005 | currency:'USD':true:'4.1-2'}}</p>
      `
})
export class CurrencyComponent{ }
