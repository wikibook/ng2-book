import { Component } from '@angular/core';
import { NgForm }    from '@angular/forms';

@Component({
  selector: 'form-reference-variable',
  template: `
  <form #f="ngForm">
    아이디 : <input type="text" [(ngModel)]="user.userId" #userId="ngModel" 
            name="userId" required> {{userId.valid}}, {{userId.value}} <br>

    패스워드 : <input type="password" [(ngModel)]="user.userPassword" #password="ngModel"
            name="userPassword" required> {{password.valid}}, {{password.value}}<br>

    이름 : <input type="text" [(ngModel)]="user.userName" #userName="ngModel"
          [ngModelOptions]="{standalone: true}" required> {{userName.valid}}, {{userName.value}}
  </form><br>
  
  <div *ngIf="f.valid">            
    f.value : {{f.value | json}}<br>
    f.valid : {{f.valid}}
  </div>`
})
export class FormReferenceVariableComponent {
  user = { userId: '', userName: '', userPassword: '' };
}