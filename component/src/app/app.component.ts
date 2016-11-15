import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="left-menu">
      <div class="menu">
        <a routerLink="/">
          <h1>컴포넌트</h1>
        </a>
        <ol class="tree-list">
        <li><a routerLink="/hello" routerLinkActive="active">hello 컴포넌트</a></li>
        <li><a routerLink="/nested-component" routerLinkActive="active">중첩 컴포넌트</a></li>        
        <li><a routerLink="/parent-to-child-inputs" routerLinkActive="active">자식 컴포넌트로 데이터 전달 (inputs 속성)</a></li>
        <li><a routerLink="/parent-to-child-input" routerLinkActive="active">자식 컴포넌트로 데이터 전달 (input 장식자)</a></li>
        <li><a routerLink="/child-to-parent/" routerLinkActive="active">부모 컴포넌트로 데이터 전달</a></li>
        <li><a routerLink="/viewchild" routerLinkActive="active">viewchild 장식자</a></li>
        <li><a routerLink="/viewchildren" routerLinkActive="active">viewchildren 장식자</a></li>          
        <li><a routerLink="/contentchild" routerLinkActive="active">contentchild 장식자</a></li>
        <li><a routerLink="/contentchildren" routerLinkActive="active">contentchildren 장식자</a></li>
        <li><a routerLink="/component-style" routerLinkActive="active">컴포넌트 스타일</a></li>          
        </ol>
    </div>     
  </div>
  <div class="play-box">
    <router-outlet></router-outlet>
  </div>`
})
export class AppComponent { }