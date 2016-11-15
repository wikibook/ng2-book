import { Component } from '@angular/core';

@Component({
  selector: 'app-custom-structural-directive',
  template: `
  <button (click)="status=!status">{{status?'닫기':'열기'}}</button>
  <p *myIf="status">
    커스텀 구조 지시자 : myIf
  </p>   
  <p *ngIf="status">
    내장 구조 지시자 : ngIf (template 생략)
  </p>`
})
export class CustomStructuralDirectiveCmp {
   status = true;
}
