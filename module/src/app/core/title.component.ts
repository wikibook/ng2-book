import { Component, Input } from '@angular/core';
import { UserService } from '../core/user.service';

@Component({
  selector: 'app-title',
  template: `
  <h1 highlight>{{title}}</h1>
  by <b>{{user}}</b>`
})
export class TitleComponent {
  @Input() title = '';
  user = '';

  constructor(userService: UserService) {
    this.user = userService.nickName;
  }
}