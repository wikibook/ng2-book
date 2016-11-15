import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="left-menu">
      <div class="menu">
        <a routerLink="/">
          <h1>보안</h1>
        </a>
        <ol class="tree-list">
          <li><a routerLink="/interpolation/" routerLinkActive="active">삽입식 출력</a></li>            
          <li><a routerLink="/innerhtml" routerLinkActive="active">innerHTML을 이용한 HTML 바인딩</a></li>          
          <li><a routerLink="/trusturl/" routerLinkActive="active">URL을 신뢰하도록 처리</a></li>
          <li><a routerLink="/trusthtml/" routerLinkActive="active">HTML을 신뢰하도록 처리</a></li>
          <li><a routerLink="/trustresourceurl/" routerLinkActive="active">리소스 URL을 신뢰하도록 처리</a></li>
          <li><a routerLink="/truststyle/" routerLinkActive="active">스타일을 신뢰하도록 처리</a></li>
        </ol>
    </div>     
  </div>
  <div class="play-box">
    <router-outlet></router-outlet>
  </div>`
})
export class AppComponent {}