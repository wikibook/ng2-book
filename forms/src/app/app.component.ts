import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div class="left-menu">
      <div class="menu">
        <a routerLink="/">                
          <h1>폼</h1>
        </a>
        <ol class="tree-list">
          <li><a routerLink='/built-in-validator'>[탬플릿주도] 내장 검증기</a></li>
          <li><a routerLink='/element-status'>[탬플릿주도] 검증에 따른 엘리먼트의 상태</a></li>
          <li><a routerLink='/form-reference-variable'>[탬플릿주도] 폼 참조 변수를 이용한 검증</a></li>          

          <li><a routerLink='/form-group'>[모델주도] 폼 그룹 기반 검증</a></li>          
          <li><a routerLink='/custom-validator'>[모델주도] 커스텀 검증기</a></li>          
          <li><a routerLink='/form-status'>[모델주도] 검증에 따른 폼의 상태</a></li>
          
        </ol>
    </div>     
  </div>
  <div class="play-box">
    <router-outlet></router-outlet>
  </div>
`,
  styles: [``]
})
export class AppComponent {
  title = 'app works!';
}