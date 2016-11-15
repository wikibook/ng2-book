import { Component } from '@angular/core';

@Component({  
  selector: 'app-binding-to-directive',
  template: `    
  <input type="text" [(ngModel)]="msg">
  <button alertMsg [inputValue]="msg" (outputProperty)="outputEvent($event)" staticValue="컴포넌트에서 보낸 메시지">인사말 출력</button>
  <div>{{msgDirective|json}}</div>`
})
export class BindingToDirectiveComponent {
  msg = "행복한 하루되세요";
  msgDirective:Object;

  constructor(){
    this.msgDirective="없음";
  }
  outputEvent(msg: Object) {
    this.msgDirective=msg;
  }  
}