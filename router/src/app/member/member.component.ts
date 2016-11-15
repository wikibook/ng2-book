import { Component } from '@angular/core';

@Component({
  selector: 'member',
  template: `  
  <div *ngFor='let m of member'>{{m}}</div>`
})
export class MemberComponent {
  member: string[] = ['조지 워싱턴', '존 애덤스', '토머스 제퍼슨'];
}