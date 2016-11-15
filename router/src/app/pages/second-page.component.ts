import { Component } from '@angular/core';

@Component({
  selector: 'second-page',
  template: `<h3>두번째 페이지</h3>
  <a routerLink="/router-link-test" routerLinkActive="active">처음으로</a>`
})
export class SecondPageComponent { }