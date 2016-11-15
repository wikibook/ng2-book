import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="left-menu">
      <div class="menu">
        <a routerLink="/">
          <h1>라우팅</h1>
        </a>
        <ol class="tree-list">
          <li><a routerLink="/href-test" routerLinkActive="active"  [routerLinkActiveOptions]="{exact: true}">href 속성으로 어플리케이션 로딩</a></li>
          <li><a routerLink="/router-link-test" routerLinkActive="active"  [routerLinkActiveOptions]="{exact: true}">라우터 링크 테스트</a></li>
          <li><a routerLink="/!@#" routerLinkActive="active"  [routerLinkActiveOptions]="{exact: true}">요청 페이지 없음</a></li>
          <li><a routerLink="/hello" routerLinkActive="active"  [routerLinkActiveOptions]="{exact: true}">hello 컴포넌트</a></li>
          <hr>
          <li><a routerLink="/member" routerLinkActive="active"  [routerLinkActiveOptions]="{exact: true}">forChild 이용한 라우팅 (member컴포넌트)</a></li>
          <li><a routerLink="/children" routerLinkActive="active"  [routerLinkActiveOptions]="{exact: true}">자식 라우터</a></li>
          <li><a routerLink="/children/1" routerLinkActive="active"  [routerLinkActiveOptions]="{exact: true}">자식 라우팅시 id가 존재함</a></li>
          <li><a routerLink="/children/5" routerLinkActive="active"  [routerLinkActiveOptions]="{exact: true}">자식 라우팅시 id가 없음</a></li>
          <hr>
          <li><h3>로그인 진행 테스트</h3></li>
          <li><a routerLink="/login" routerLinkActive="active"  [routerLinkActiveOptions]="{exact: true}">로그인 페이지</a></li>
          <li><a routerLink="/admin" routerLinkActive="active"  [routerLinkActiveOptions]="{exact: true}">운영자 페이지</a></li>
          <hr>
          <li><h3>로그인 후 접근</h3></li>
          <li><a routerLink="/lazy/player" routerLinkActive="active"  [routerLinkActiveOptions]="{exact: true}">loadChildren 사용시 caenLoad가드 적용</a></li>
          <li><a routerLink="/active" routerLinkActive="active"  [routerLinkActiveOptions]="{exact: true}">/active</a></li>
          <li><a routerLink="/active/child1" routerLinkActive="active"  [routerLinkActiveOptions]="{exact: true}">/active/child1</a></li>
          <li><a routerLink="/active/child2" routerLinkActive="active"  [routerLinkActiveOptions]="{exact: true}">/active/child2</a></li>
          
          
        </ol>
    </div>     
  </div>
  <div class="play-box">
    <router-outlet></router-outlet>
  </div>`
})
export class AppComponent { }