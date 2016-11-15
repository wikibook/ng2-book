import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngstyle',
  template: `   
  <div>
    <input type="text" [value]="text" [(ngModel)]="text">
    <select [value]="style" [(ngModel)]="style">        
      <option value="normal">반듯한 글자</option>
      <option value="italic">기울어진 글자</option>        
    </select>
    <label>볼드체<input type="checkbox" (change)="changeWeight($event)"></label>
  </div>
  <h2 [ngStyle]="{'font-style': style, 'font-weight': weight}">{{text}}</h2>      
  <h1 [style.font-style]="style" [style.font-weight]="weight">{{text}}</h1>`})
export class NgstyleComponent {

  text = '안녕하세요';
  weight = 'normal';
  style = 'normal';

  changeWeight($event: any) {
    this.weight = $event.target.checked ? 'bold' : 'normal';
  }
  
}