import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="left-menu">
      <div class="menu">
        <a routerLink="/">
          <h1>탬플릿</h1>
        </a>
        <ol class="tree-list">            
          <li><a routerLink="/interpolation">삽입식 (interpolation)</a></li>
          <li><a routerLink="/oneway-expression">단방향 바인딩 (표현식) </a></li>
          <li><a routerLink="/oneway-statement">단방향 바인딩 (명령식)</a></li>
          <li><a routerLink="/twoway-ngmodel">양방향 바인딩 (ngModel)</a></li>
          <li><a routerLink="/ngclass">속성지시자 (ngClass)</a></li>
          <li><a routerLink="/ngstyle">속성지시자 (ngStyle)</a></li>
          <li><a routerLink="/ngif">구조지시자 (ngIf)</a></li>
          <li><a routerLink="/ngswitch">구조지시자 (ngSwitch)</a></li>
          <li><a routerLink="/ngfor">구조지시자 (ngFor)</a></li>
          <li><a routerLink="/template-ngfor">구조지시자 (탬플릿 ngFor)</a></li>
          <li><a routerLink="/template-input-variables">탬플릿 입력변수</a></li>
          <li><a routerLink="/template-reference-variables">탬플릿 참조변수</a></li>
        </ol>
    </div>     
  </div>
  <div class="play-box">
    <router-outlet></router-outlet>
  </div>`,
  styles: [``]
})
export class AppComponent {

  title = 'app works!';
  
}