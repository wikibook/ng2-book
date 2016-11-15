import { Component, Input } from '@angular/core';

@Component({
    selector: 'child-inputs',
    template: `<div>자식<br><br>
        inputs 프로퍼티로 받은 값 : {{name1}}, {{name2}}</div>`,
    styles: [`div{border: 2px dotted #666;padding:10px;margin-top:5px;width:90%;height:75%;}`],
    inputs: ['name1', 'name2']
})

export class ChildInputsComponent {
    name1: string;
    name2: string;
}