import { Component } from '@angular/core';

@Component({
  selector: 'app-date-predefined',
  template: `<p>01 - {{today | date:'fullDate'}} ▶ {{today | date:'longDate'}}</p>    
<p>02 - {{today | date:'medium'}} ▶ {{today | date:'mediumDate'}} ▶ {{today | date:'mediumTime'}}</p>
<p>03 - {{today | date:'short'}} ▶ {{today | date:'shortDate'}} ▶ {{today | date:'shortTime'}}</p>`
})
export class DatePredefinedComponent {
  today: number = Date.now();
}
