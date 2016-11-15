import { Component } from '@angular/core';

@Component({
  selector: 'first-depth',
  template: `
  <div class="first">1번째 깊이</div>
  <second-depth></second-depth>
  <button>host-context</button>`,
  styles: [`
  :host{
    display: block;
    border: 5px dotted black;
  }
  :host(.active){    
    display: block;
    border: 5px solid blue;
    width:270px;
    padding:10px;
    margin-top:5px;
  }
  :host-context(.first-group) button{
    font-weight:bold;
  }`]
})
export class FirstDepthComponent { }