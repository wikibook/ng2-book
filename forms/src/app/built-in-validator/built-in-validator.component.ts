import { Component } from '@angular/core';

@Component({
  selector: 'built-in-validator',
  template: `
  아이디 : <input type="text"  [(ngModel)]="user.userId" #userId="ngModel" placeholder="2~10글자" pattern="^[a-z][a-z0-9]{1,9}" required> {{userId.valid}}<br>
  이름 : <input type="text"  [(ngModel)]="user.userName" #userName="ngModel" placeholder="2~5글자" minlength="2"  maxlength="5" required> {{userName.valid}}<br><br>
  <div *ngIf="userId.valid && userName.valid">
    {{user|json}}
  </div>`
})
export class BuiltInValidatorComponent {
  user = { userId: '', userName: '' };
}