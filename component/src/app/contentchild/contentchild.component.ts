import {Component, ContentChild, Directive, Input} from '@angular/core';

@Directive({selector: 'GroupTitle'})
export class GroupTitle {
  @Input() value: string;
}

@Component({
  selector: 'my-button',
  template: `<button (click)="hello()">{{buttonValue}}</button>`
})
export class childButtonCmp {
  @Input() value: string;
  get buttonValue(): string { return this.value }
  hello(){ alert('hello!'); }
}

@Component({
  selector: 'button-group',
  template: `
    <div>{{getTitle}}</div>
    <my-button value="버튼1"></my-button>
    <my-button value="버튼2"></my-button>
    <my-button value="버튼3"></my-button>`
})
export class ButtonGroup {
  @ContentChild(GroupTitle) groupTitle: GroupTitle;
  get getTitle(): string { return this.groupTitle.value }
}

@Component({
  selector: 'app-contentchild',
  template: `
    <button-group>
      <GroupTitle value="버튼 그룹"></GroupTitle>
    </button-group>`
})
export class ContentChildComp {}