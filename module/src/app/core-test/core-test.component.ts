import { Component } from '@angular/core';

@Component({
  selector: 'core-test',
  template: `
  <app-title [title]="title"></app-title>`
})
export class CoreTestComponent {

  title = '반갑습니다! Core Module!';

}