import { Component } from '@angular/core';

@Component({
  selector: 'app-ngswitch',
  template: `
  <div>
  <button (click)="grade='admin'" 
  [style.font-weight]="grade=='admin'?'bold':'normal'">운영자</button>

  <button (click)="grade='member'" 
  [style.font-weight]="grade=='member'?'bold':'normal'">회원</button>

  <button (click)="grade='guest'" 
  [style.font-weight]="grade=='guest'?'bold':'normal'">손님</button>
  </div><br>
  
  <p *ngIf="grade=='null'">회원등급을 선택해주세요</p>
  <p *ngIf="grade!='null'">{{grade}} 등급이 선택됨</p>

  <div [ngSwitch]="grade">
    <h3 *ngSwitchCase="'null'">회원등급을 선택해주세요</h3>
    <h3 *ngSwitchCase="'admin'">운영자가 선택됨</h3>
    <h3 *ngSwitchCase="'member'">회원이 선택됨</h3>
    <h3 *ngSwitchDefault>손님 선택</h3>
  </div>

  <p [ngSwitch]="grade">
    <template ngSwitchCase="null">회원등급을 선택해주세요</template>
    <template [ngSwitchCase]="'admin'">운영자가 선택됨</template>
    <template [ngSwitchCase]="'member'">회원이 선택됨</template>
    <template ngSwitchDefault>손님 선택</template>
  </p>`
})
export class NgswitchComponent {

  grade: any;
  constructor() {
    this.grade = 'null';
  }

}