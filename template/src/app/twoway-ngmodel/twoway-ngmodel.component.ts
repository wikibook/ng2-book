import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-twoway-ngmodel',
  template: `
  <select [(ngModel)]="city">
        <option *ngFor="let obj of cities" [value]="obj.eng">{{obj.han}}</option>
        </select>
  <select (change)="city=$event.target.value">
          <option *ngFor="let obj of cities" [value]="obj.eng" [selected]="city==obj.eng?true:null">
          {{obj.han}}
          </option>
        </select><br>

  <input [(ngModel)]="city">
  <input [value]="city" (input)="city=$event.target.value" ><br>
  
  <span *ngFor="let obj of cities">
          <input type="radio" [checked]="(obj.eng==city?true:null)" (click)="city=$event.target.value" [value]="obj.eng" name="city">{{obj.han}}
        </span>`,
  styles: [`section{margin-bottom:20px;}`]
})
export class TwowayNgmodelComponent {

  city: string = "seoul";
  cities: Object[] = [
    { han: "서울", eng: "seoul" },
    { han: "대전", eng: "daejeon" },
    { han: "대구", eng: "daegu" },
    { han: "부산", eng: "pusan" }
  ];
  
}