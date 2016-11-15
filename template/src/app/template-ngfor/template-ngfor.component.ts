import { Component } from '@angular/core';

@Component({
  
  selector: 'app-template-ngfor',
  template: `
  <h3>세계에서 가장 긴 강 TOP3</h3>
  <div template="ngFor let item of items; let i = index">
    {{i+1}}위 | {{item.title}} | {{item.length | number }}km
  </div><br>
    
  <template ngFor let-item [ngForOf]="items" let-i="index+1">
    <div>
    {{i}}위 | {{item.title}} | {{item.length | number }}km
    </div>
  </template>`
})
export class TemplateNgforComponent {
  
  items: Object[] = [];
  constructor() {
     this.items.push({'title': '나일강','length':'6600'});
     this.items.push({'title': '아마존강','length':'6400'});
     this.items.push({'title': '미시시피강','length':'6200'});
  }

}
