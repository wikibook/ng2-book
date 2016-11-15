import { Component } from '@angular/core';

@Component({  
  selector: 'element-status',
  template: `
  <input type="text"  [(ngModel)]="user.id" #id="ngModel"  placeholder="아이디 (1~10글자)"  pattern="^[a-z][a-z0-9]{1,9}" maxlength="10" required> 
  <p>id.value : {{id.value|json}}</p>
  <p>id.valid : {{id.valid}}</p>
  <p>id.untouched : {{id.untouched}}</p>
  <p>id.touched : {{id.touched}}</p>  
  <p>id.pristine : {{id.pristine}}</p>
  <p>id.dirty : {{id.dirty}}</p>
  <p>id.errors : {{id.errors |json}}</p>
  `,
  styles: [`
  .ng-untouched{ font-weight: normal; }
  .ng-touched{ font-weight: bold; }
  .ng-dirty{ background-color: white;color: black; }
  .ng-pristine{ background-color: khaki;color: white; }
  .ng-valid{ border: 2px solid red;}
  .ng-invalid{ border: 2px dotted gray; }
  `]  
})
export class ElementStatusComponent {
 user = { id: '' };
}