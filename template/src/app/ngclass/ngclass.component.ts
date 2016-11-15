import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngclass',
  template: `
  <button class="button" [ngClass]="{active: isActive}"
  (click)="isActive=!isActive;">{{isActive?'활성화':'비 활성화'}}</button><br>

  <button [ngClass]="myclass">버튼1</button>
  <button [ngClass]="'active'">버튼2</button>
  <button bind-ngClass="myclass">버튼3</button><br>

  <button [attr.class]="myclass">버튼4</button>
  <button [class.active]="true">버튼5</button>
  `,
  styles: [`
  button {
      width: 100px; padding: 10px;
      margin-bottom: 10px;
      text-align:center;   
      border: 1px dotted #666;           
  }
  button.active {
      background-color: #CFD7EB; border: 1px solid #666;
  }`]
})
export class NgclassComponent {

  public isActive: boolean = false;
  myclass: string="active";  

}