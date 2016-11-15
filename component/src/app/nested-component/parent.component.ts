import { Component } from '@angular/core';

@Component({
  selector: 'nested-parent',
  template: `
  <div>부모
    <nested-child></nested-child>
  </div>`,
  styles: ['div{border: 2px solid #666;padding:10px;width:400px;height:200px;}']
})
export class NestedParentComponent { }