import { Component, Input } from '@angular/core';

@Component({
  selector: 'child-input',
  template: `<div>
        자식<br>
        name1 : {{name1}}<br>
        name2 : {{name2}}<br>
        name3 : <span *ngFor="let i of name3"> {{i}}</span><br>
        name4 : {{name4}}<br>
        name5 : {{name5}}<br>
        name6 : {{name6}}<br>
        </div>`,
  styles: [`div{border: 2px dotted #666;padding:10px;margin-top:5px;width:90%;height:75%;}`]  
})

export class ChildInputComponent {  
  @Input() name1: string;
  @Input() name2: string;
  @Input() name3: string[];
  @Input() name4: number;
  @Input() name5: string;
  @Input() name6: string;   
}