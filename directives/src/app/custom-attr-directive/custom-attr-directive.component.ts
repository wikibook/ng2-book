import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attr-directive',
  template: `
  <div [mystyle]="'Lavender'" [myfontsize]="'30px'">Directive Attribute!</div><br>
  <div [style.background]="'Lavender'" [style.fontSize]="'30px'" [style.padding]="'10px'">Native Attribute!</div>`
})
export class CustomAttrDirectiveCmp{}