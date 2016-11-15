import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="left-menu">
      <div class="menu">
        <a routerLink="/">
          <h1>모듈</h1>
        </a>
        <ol class="tree-list">        
          <li><a routerLink="/hello" routerLinkActive="active">/hello 어플리케이션 루트모듈 라우팅 테스트</a></li>
          <li><a routerLink="/core-test" routerLinkActive="active">/core-test 핵심모듈 테스트</a></li>
          <li><a routerLink="/member-list" routerLinkActive="active">/member-list 특징모듈 테스트</a></li>
          <li><a routerLink="/player" routerLinkActive="active">/player 공유모듈 테스트</a></li>
          <li><a routerLink="/lazy/player" routerLinkActive="active">/lazyplayer/player 느린모듈 테스트</a></li>
        </ol>
    </div>     
  </div>
  <div class="play-box">
    <router-outlet></router-outlet>
  </div>`
})
export class AppComponent { }