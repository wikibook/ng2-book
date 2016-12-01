import { Component } from '@angular/core';

@Component({
  selector: 'app-json',
  template: `<div>
    JSON 파이프 없이 바로출력<br>
    <pre>{{object}}</pre>
    JSON 파이프 사용해 출력<br>    
    <pre>{{object | json}}</pre>
    JSON.stringify를 사용해 출력<br>    
    <pre>{{jsonString}}</pre>
  </div>`
})
export class JsonComponent {
  object: Object = { name: 'Angular', version: 2, currentPipe: { name:'json 파이프',test: ['a',1] } };
  jsonString : string = JSON.stringify(this.object);
}