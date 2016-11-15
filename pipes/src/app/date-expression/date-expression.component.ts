import { Component } from '@angular/core';

@Component({
  selector: 'app-date-expression',
  template: `
            <p>01 - {{todayUTC}}</p>
            <p>02 - {{todayDateObject}}</p>
            <p>03 - {{todayISO}}</p>
            <p>04 - {{todayUTC | date}}</p>
            <p>05 - {{todayDateObject | date}}</p>
            <p>06 - {{todayISO | date}}</p>`
})

export class DateExpressionComponent {
  todayUTC: number = Date.now(); // UTC 방식
  todayDateObject: Date = new Date(); //Dateobject 방식
  todayISO: string = (new Date()).toISOString(); // ISO 방식 
}