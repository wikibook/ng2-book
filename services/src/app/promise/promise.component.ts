import { Component } from '@angular/core';
import { MockService } from './mock.service';
import { User } from './user';

@Component({
  selector: 'promise',
  template: `
  {{reqMessage}}<br>
  {{reqMessage2}}<br><br>  
  <list-component [list]="listUser" [title]="'이름 출력 (지연없음)'"></list-component>
  <list-component [list]="listUserDelay" [title]="'이름 출력 (1초 지연)'"></list-component>`,
  providers: [MockService]
})
export class PromiseComponent {
  reqMessage: String ='';
  reqMessage2: String ='';

  listUser: User[];
  listUserDelay: User[];
  
  
  constructor(private userService: MockService) {
    this.userService.getRequest(true).then(reason => this.reqMessage = reason);
    this.userService.getRequest(false).then(reason => this.reqMessage2 = reason);

    this.userService.getUser().then(user => this.listUser = user);
    this.userService.getUserDelay().then(user => this.listUserDelay = user);
  }
}