import { Component } from '@angular/core';

class Country {
  constructor(public code: number, public name: string) {}
}

@Component({
  selector: 'app-template-input-variables',
  template: `
  <h3> 국가번호 </h3>
  <ul>
    <li *ngFor="let country of Countries;let i=index;">
      {{ (i+1) + " " + country.name+"("+country.code+")" }}
    </li>
  </ul>`
})
export class TemplateInputVariablesComponent {
  
  Countries = [
    new Country(82, '대한민국'),
    new Country(1, '미국'),
    new Country(81, '일본')
  ];

}