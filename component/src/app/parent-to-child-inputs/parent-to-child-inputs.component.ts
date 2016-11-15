import { Component } from '@angular/core';

@Component({
  selector: 'app-parent-to-child-inputs',
  template: `<div>부모
              <child-inputs [name1]="name1" [name2]="name2"></child-inputs>
          </div>`,
  styles: [`div{border: 2px solid #666;padding:10px;width:400px;height:200px;}`]
})
export class ParentToChildInputsComponent {
  name1 = "사과";
  name2 = "바나나";
}