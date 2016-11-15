import { Component } from '@angular/core';

@Component({
  selector: 'app-custom-directive',
  template: `<button my-click> onClick() </button>`
})
export class CustomDirectiveCmp {
  constructor() { }
}