import { Component } from '@angular/core';

@Component({
  selector: 'app-slice',
  template: `<div>
    <h1>{{msg}}</h1>
    <p>0:3 ▶ {{msg | slice:0:3}}</p>
    <p>3:0 ▶ {{msg | slice:3:0}}</p>
    <p>-3 ▶ {{msg | slice:-3}}</p>
    <p>-5:-2 ▶ {{msg | slice:-5:-2}}</p>
    <p>-10 ▶ {{msg | slice:-10}}</p>
    <p>10 ▶ {{msg | slice:10}}</p>
  </div>`
})
export class SliceComponent{
  msg: string = 'abcdefghijklmnopqrstuvwxyz';
}