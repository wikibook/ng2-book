import { Component } from '@angular/core';

@Component({
  selector: 'app-component-style',
  template: `
  부모 <br>
  <div class="first-group">
    <first-depth></first-depth>
  </div>  
  <first-depth class="active"></first-depth>`,
  styles: [`
  :host {
    display: block;
    border: 5px dotted black;
    width:300px;
    padding:10px;
  }
  :host(:hover){    
    font-style:italic;
  }
  :host /deep/ div.first{
    color:red;
    font-size:30px;
  }  
  :host /deep/ div.second{
    text-decoration: line-through;
    font-size:20px;
  }`]
})
export class ComponentStyleComponent {}