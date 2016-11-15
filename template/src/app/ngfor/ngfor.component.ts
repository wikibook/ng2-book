import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngstyle',
  template: `   
  <h3>한국에서 가장 높은 산 TOP3</h3>
  <div *ngFor="let item of items; let i = index">
    {{ i+1 }} | {{item.title}} | {{item.height | number}}m
  </div><br>`
})
export class NgForComponent {

  items: Object[] = [];

  constructor() {
     this.items.push({'title': '한라산','height':'1950'});
     this.items.push({'title': '지리산','height':'1915'});
     this.items.push({'title': '설악산','height':'1707.9'});
  }
  
}