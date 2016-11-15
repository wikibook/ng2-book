import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl }    from '@angular/forms';
import { InputValidator } from './input-validator';

@Component({  
  selector: 'custom-validators',
  template: `
  <form [formGroup]="form">
			<input type="text" placeholder="이름" formControlName="username" />      
      <div>
        form.valid : {{form.valid}}<br> 
        form.value : {{form.value | json}}
      </div><br>
			<div *ngIf="!username.valid">
			  <p *ngIf="username.errors.required">이름 입력을 해주세요</p>
        <p *ngIf="username.errors.minlength">3글자 이상입니다.</p>
        <p *ngIf="username.errors.maxlength">10글자를 초과할 수 없습니다.</p>
			  <p *ngIf="username.errors.startsWithNumber">숫자로 시작할 수 없습니다.</p>
			</div></form>`
})
export class CustomValidatorsComponent {

  form: FormGroup;
  username: FormControl;

  constructor(private fb: FormBuilder) {

    this.username = new FormControl("",
      Validators.compose([
        Validators.required, Validators.minLength(3), 
        Validators.maxLength(10), InputValidator.startsWithNumber
      ])
    );

    this.form = fb.group({
      username: this.username
    });
  }
}