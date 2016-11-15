import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="left-menu">
      <div class="menu">
        <li><a routerLink="/">
          <h1>의존주입</h1>
        </a>
        <ol class="tree-list">
          <li><a routerLink="/without-di"  routerLinkActive="active">의존주입 없이 모듈 호출</a></li>
          <li><a routerLink="/value-provider"  routerLinkActive="active">값 제공자</a></li>
          <li><a routerLink="/factory-provider"  routerLinkActive="active">팩토리 제공자</a></li>
          <li><a routerLink="/class-provider"  routerLinkActive="active">대체 클래스 제공자</a></li>
          <li><a routerLink="/aliased-class-provider"  routerLinkActive="active">가명 클래스 제공자</a></li>
          <li><a routerLink="/opaque-token"  routerLinkActive="active">오파크토큰을 이용한 주입</a></li>
          <li><a routerLink="/optional-decorator"  routerLinkActive="active">선택적 장식자</a></li>
          <li><a routerLink="/factory"  routerLinkActive="active">팩토리 패턴을 이용한 객체생성</a></li>
          <li><a routerLink="/reflective-injector"  routerLinkActive="active">주입기를 이용한 객체생성</a></li>
        </ol>
    </div>     
  </div>
  <div class="play-box">
    <router-outlet></router-outlet>
  </div>`
})
export class AppComponent { }