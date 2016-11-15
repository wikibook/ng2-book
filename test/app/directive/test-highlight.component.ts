import { Component } from '@angular/core';

@Component({
  selector: 'test-highlight',
  template: `<h1 highlight="darkgray">darkgray</h1>
  <h2 highlight>gray (기본색상)</h2>
  <h3>지시자가 없음</h3>`
})
export class TestHighlightComponent { }
