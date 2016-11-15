import { Component, Input, ViewChildren, QueryList } from '@angular/core';

@Component({
  selector: 'child-cmp',
  template: '{{getName}}'
})
export class ChildCmp {
  @Input() childname: string;
  get getName():string{
    return this.childname;
  }
  
  public printName(){
    console.log(this.childname);    
  }
}

@Component({
  selector: 'some-cmp',
  template: `
    <child-cmp #child1 [childname]="'자식1'"></child-cmp>, {{child1.childname}}, {{child1.getName}}<br>
    <child-cmp #child2 [childname]="'자식2'"></child-cmp>, {{child2.childname}}, {{child2.getName}}<br>
    <child-cmp #child3 [childname]="'자식3'"></child-cmp>, {{child3.childname}}, {{child3.getName}}<br><br>
    
    <div *ngFor="let i of children">{{i.childname}}</div>
    `
})
export class ViewchildrenComponent {
  @ViewChildren('child1,child2,child3') children:QueryList<ChildCmp>;

  ngAfterViewInit() {
    this.children.toArray().forEach((child)=>child.printName());
  }
}
