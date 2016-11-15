import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Validator } from './validator';

@Component({
  selector: 'validation-status',
  template: `  
<form [formGroup]="Form">
  <div>
    <input formControlName="user_id" name="user_id" placeholder="아이디" />
    <span *ngIf="Form.controls.user_id.errors">아이디를 형식에 맞게 입력해주세요!</span>
  </div>  
  <div>
    <input formControlName="email" name="email" placeholder="이메일" />
    <span *ngIf="Form.controls.email.errors">형식이 맞지 않습니다!</span>
  </div>
</form>
<div>
  Form.value : {{Form.value|json}}<br>
  Form.valid : {{Form.valid}}<br>
  Form.touched : {{Form.touched}}<br>
  Form.untouched : {{Form.untouched}}<br>
  Form.dirty : {{Form.dirty}}<br>  
  Form.controls.email.value : {{Form.controls.email.value}}<br>
  Form.controls.email.valid : {{Form.controls.email.valid}}<br>
  Form.controls.email.touched : {{Form.controls.email.touched}} <br>
  Form.controls.email.untouched : {{Form.controls.email.untouched}}<br>
  Form.controls.email.dirty : {{Form.controls.email.dirty}}<br>
  Form.controls.email.errors : {{Form.controls.email.errors | json }}  
</div>`
})
export class FormStatusComponent {
  Form: any;
  constructor(private fb: FormBuilder) {
    this.Form = new FormGroup({
      user_id: new FormControl('', Validators.compose([ Validators.required, Validators.pattern("^[a-z][a-z0-9]{1,9}") ])),
      email: new FormControl('', Validators.compose([ Validators.required, Validator.emailValidator ]))
    });    
  };
}