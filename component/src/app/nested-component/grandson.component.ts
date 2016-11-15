import { Component } from '@angular/core';

@Component({
  selector: 'nested-grandson',
  template: `<div>손자</div>`,
  styles: [`div{border: 2px dotted #666;padding:10px;margin-top:5px;width:65%;height:65%;}`]
})
export class NestedGrandsonComponent{}