import { Component } from '@angular/core';

@Component({
  selector: 'third-page',
  template: `<h3>세번째 페이지</h3>
  <a routerLink="/router-link-test" routerLinkActive="active">처음으로</a>`
})
export class ThirdPageComponent { }