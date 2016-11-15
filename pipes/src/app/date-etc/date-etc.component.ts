import { Component } from '@angular/core';

@Component({
  selector: 'app-date-etc',
  template: `
<p>01 - 시대(era) : {{today | date:'G'}} ▶ {{today | date:'GGGG'}}</p>
<p>02 - 요일(weekday) : {{today | date:'E'}} ▶ {{today | date:'EEE'}} ▶ {{today | date:'EEEE'}}</p>
<p>03 - 타임존(태평양 표준시간) : {{today | date:'z'}}</p>
<p>04 - 타임존(GMT-8:00기준) {{today | date:'Z'}}</p>`})
export class DateEtcComponent {
  today: number = Date.now();
}