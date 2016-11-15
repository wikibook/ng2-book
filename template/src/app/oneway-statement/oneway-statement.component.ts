import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-oneway-statement',
  template: `
  <h3>{{msg}}</h3>
  <button (click)="greetings('안녕하세요');">안녕하세요</button>
  <button on-click="greetings('환영합니다');">환영합니다</button><br><br>

  <h3>{{msg2}}</h3> 
  <contactinput (save)="saveContact($event)"></contactinput><br><br>
  
  <h3>{{clicked}}</h3>
  <button (myClick)="clicked=$event">클릭</button>`
})
export class OnewayStatementComponent {
  
  public msg: string = "버튼을 선택해주세요";
  public msg2: string = "이름과 이메일을 입력해주세요";

  clicked: any = "버튼을 선택해주세요";

  greetings(msg: string) {
    this.msg = msg;
  } 

  private saveContact(contact) {
    this.msg2 = JSON.stringify(contact);
  }
  
}