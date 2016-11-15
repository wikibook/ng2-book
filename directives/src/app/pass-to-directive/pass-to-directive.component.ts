import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pass-to-directive',
  template: `    
  <input type="text" [(ngModel)]="msg">
  <button myDirective [inputValue]="msg" staticValue="안녕하세요">인사말 출력</button>`
})
export class PassToDirectiveComponent {
  msg = "행복한 하루되세요";
}