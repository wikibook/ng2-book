import { Component } from '@angular/core';

@Component({
  selector: 'child1',
  template: `
  <h3>자식1</h3>
  <router-outlet></router-outlet>`
})
export class Child1Component { }