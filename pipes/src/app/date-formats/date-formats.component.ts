import { Component } from '@angular/core';

@Component({
  selector: 'app-date-formats',
  template: `
<p>01 - {{today | date:'y년 M월 d일'}}</p>
<p>02 - {{today | date:'y년 M월 d일 h시 m분 s초'}}</p>
<p>03 - {{today | date:'yy년 MM월 dd일'}}</p>
<p>04 - {{today | date:'yy년 MM월 dd일 HH시 mm분 ss초'}}</p>
<p>05 - {{today}}</p>
<p>06 - {{childrensDay}}</p>
<p>07 - {{childrensDay | date:'yy년 MM월 dd일'}}</p>
<p>08 - {{liberationDay | date:'y-MM-dd'}}</p>

`
})
export class DateFormatsComponent {
  today: number = Date.now();  
  childrensDay: Date = new Date(2017, 4, 5, 12, 13, 14, 123);// 2017-05-05 12:13:14 123(밀리세컨드)
  liberationDay: Date = new Date("2017-08-15 12:13:14"); // 2017-08-15 12:13:14
}