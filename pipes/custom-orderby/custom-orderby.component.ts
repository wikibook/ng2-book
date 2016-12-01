import { Component } from '@angular/core';


@Component({
  selector: 'app-custom-orderby',
  template: `
  <div>
  정렬방법 : <select [(ngModel)]="sortMethod">
    <option value="asc">오름차순</option>
    <option value="desc">내림차순</option>
  </select>

  정렬키 : <select [(ngModel)]="sortKey">
    <option value="name">이름 (name)</option>
    <option value="age">나이 (age)</option>
  </select></div><br>
  <ol>
      <li *ngFor="let member of members | orderBy:sortMethod:sortKey">
        {{ member.name }} ({{ member.age }})
      </li>
   </ol>`
})

export class CustomOrderbyComponent {
  sortMethod = "asc";
  sortKey="name";
  members: Array<any> = [
    { name: '김유신', age: 11 },
    { name: '문무왕', age: 27 },
    { name: '원효대사', age: 37 },
    { name: '혜초', age: 42 },
    { name: '장보고', age: 58 },
    { name: '대조영', age: 66 },
    { name: '강감찬', age: 90 }
  ];

}
