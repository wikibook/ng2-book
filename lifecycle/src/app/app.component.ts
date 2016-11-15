import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="left-menu">
      <div class="menu">
        <a routerLink="/">
          <h1>생명주기</h1>
        </a>
        <ol class="tree-list">
        <li><a routerLink="/cmp-lifecycle" routerLinkActive="active">컴포넌트의 생명주기</a></li>
        <li><a routerLink="/directive-lifecycle" routerLinkActive="active">지시자의 생명주기</a></li>
        <li><a routerLink="/cmp-directive-lifecycle" routerLinkActive="active">컴포넌트와 지시자의 생명주기</a></li>                
        </ol>
    </div>     
  </div>
  <div class="play-box">
    <router-outlet></router-outlet>
  </div>`
})
export class AppComponent { }