import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'form-group',
  template: `
  <form [formGroup]="form" (ngSubmit)="onSubmit($event)">
    소문자 : <input formControlName="lowerCase" placeholder="소문자 3글자만 허용" pattern="[a-z]{3}"><br>
    대문자 : <input formControlName="upperCase" placeholder="대문자 3글자만 허용">
    <button type="submit" *ngIf="form.valid">확인</button>
  </form>
  <div>
    <button (click)="setValue()">값 채우기</button> 
    <button (click)="reset()">리셋</button>
    <button (click)="patch()">패치</button>
  </div> <br>
  <div>
    form.value : {{form.value | json}} <br>
    form.status : {{form.status}} <br>
    form.valid : {{form.valid}} <br>
  </div>
   `
})
export class FormGroupComponent {

  form = new FormGroup({
    lowerCase: new FormControl('', Validators.required),
    upperCase: new FormControl('', Validators.compose([ Validators.required, Validators.pattern("[A-Z]{3}")])),
  });

  setValue() { this.form.setValue({lowerCase: 'abc', upperCase:'ABC'}); }
  reset() { this.form.setValue({lowerCase: '', upperCase:''}); }

  onSubmit(event) {
    console.info("this.form.value ... ",this.form.value.lowerCase , this.form.value.upperCase);
    console.info("this.form.get ... ",this.form.get('lowerCase').value, this.form.get('upperCase').value);
  }

  patch(){
    this.form.patchValue({lowerCase: 'one'});
    this.form.patchValue({upperCase: 'ONE'});
  }
}