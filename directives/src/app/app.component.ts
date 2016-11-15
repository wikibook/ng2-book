import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="left-menu">
      <div class="menu">
        <li><a routerLink="/">
          <h1>지시자</h1>
        </a>
        <ol class="tree-list">
          <li><a routerLink="/custom-directive" routerLinkActive="active">커스텀 지시자</a></li>
          <li><a routerLink="/element-rendering" routerLinkActive="active">ElementRef와 Renderer</a></li>
          <li><a routerLink="/pass-to-directive" routerLinkActive="active">지시자에 값 넘기기</a></li>
          <li><a routerLink="/binding-to-directive" routerLinkActive="active">지시자로 부터 응답 받기</a></li>
          <li><a routerLink="/custom-attr-directive" routerLinkActive="active">커스텀 속성 지시자</a></li>
          <li><a routerLink="/custom-structural-directive" routerLinkActive="active">커스텀 구조 지시자</a></li>
          <li><a routerLink="/highlight" routerLinkActive="active">하이라이트 지시자</a></li>          
        </ol>
    </div>     
  </div>
  <div class="play-box">
    <router-outlet></router-outlet>
  </div>`
})
export class AppComponent { }