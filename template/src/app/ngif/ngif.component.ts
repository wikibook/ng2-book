import { Component } from '@angular/core';

@Component({
  selector: 'app-ngif',
  template: `  
  <select [(ngModel)]="gender">      
      <option value=1>남자</option>
      <option value=2>여자</option>
  </select>

  <h2 *ngIf="gender == 1">남자가 선택됨</h2>
  <h2 *ngIf="gender == 2">여자가 선택됨</h2>

  <h3>    
    <span template="ngIf gender == 1">남자가 선택됨</span>
    <span template="ngIf gender == 2">여자가 선택됨</span>
  </h3>  

  <h4>
    <template [ngIf]="gender == 1">남자가 선택됨</template>
    <template [ngIf]="gender == 2">여자가 선택됨</template>    
  </h4>`
})
export class NgifComponent{

  gender = 1;
  
}