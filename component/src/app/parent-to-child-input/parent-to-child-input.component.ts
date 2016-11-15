import { Component } from '@angular/core';

@Component({
  selector: 'parent-to-child-input',
  template: `<div>부모
              <child-input [name1]="fruit1" [name2]="fruit2()" [name3]="fruit3" [name4]="1+1" [name5]="fruit5" [name6]="fruit6"></child-input>
          </div>`,
  styles: [`div{border: 2px solid #666;padding:10px;width:400px;height:250px;}`]
})
export class ParentToChildInputComponent {
  fruit1="사과";

  fruit2(){
    return "배";
  }  

  fruit3 = ['딸기','포도','참외'];

  static fruit5="수박"; // static 형은 곧바로 전달 불가    
    
  get fruit6(){
    return ParentToChildInputComponent.fruit5; 
  }
}