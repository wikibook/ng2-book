import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="left-menu">
      <div class="menu">
        <a routerLink="/">                
          <h1>애니메이션</h1>
        </a>
        <ol class="tree-list">
            <li><a routerLink="/css-key-frames">CSS 키 프레임 애니메이션</a></li>
        <li><a routerLink="/message-box">메시지 상자</a></li>
        <li><a routerLink="/slide-menu">슬라이드 메뉴</a></li>
        <li><a routerLink="/timing">타이밍 효과 테스트</a></li>
        <li><a routerLink="/keyframes"> 키 프레임 기반 애니메이션</a></li>
        <li><a routerLink="/animation-group">그룹 애니메이션</a></li>
        <li><a routerLink="/animation-callback">애니메이션 시작/종료시 콜백 테스트</a></li>
        </ol>
    </div>     
  </div>
  <div class="play-box">
    <router-outlet></router-outlet>
  </div>`
})
export class AppComponent { }
