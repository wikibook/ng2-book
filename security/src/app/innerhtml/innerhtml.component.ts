import { Component } from '@angular/core';

@Component({
  selector: 'app-innerhtml',
  template: ` 
  <div [innerHTML]="script"></div>
  <div [innerHTML]="htmlAnchor"></div>
  <div [innerHTML]="htmlStyle"></div>
  `
})
export class InnerhtmlComponent {
  
  script: string = `<script type="text/javascript"> alert("테스트 알림창!"); </script>`;
  htmlAnchor: string = `<a href="javascript: alert('Hello!')">Hello 알림창</a>`;
  htmlStyle: string = `<p style="font-weight:bold;color:blue;">Hello 스타일</p>`

}