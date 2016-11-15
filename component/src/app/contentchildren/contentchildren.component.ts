import {Component, ContentChildren, Directive, Input, QueryList} from '@angular/core';

@Directive({ selector: 'word' })
export class Word {
  @Input() value: string;
}

@Component({
  selector: 'word-group',
  template: `{{words}}`
})
export class WordGroup {
  @ContentChildren(Word) word: QueryList<Word>;
  get words(): string { return this.word ? this.word.map(p => p.value).join(', '):''; }
}

@Component({
  selector: 'example-app',
  template: `
    <button (click)="add()">추가</button>
    <word-group>
      <word value="apple"  *ngIf="cnt>=0"></word>
      <word value="grape"  *ngIf="cnt>=1"></word>
      <word value="banana" *ngIf="cnt>=2"></word>
      <word value="mango"  *ngIf="cnt>=3"></word>
      <word value="orange" *ngIf="cnt>=4"></word>
    </word-group>`
})
export class ContentChildrenComp {
  cnt: number = 0;
  add() {
    if (this.cnt == 4) {
      this.cnt = 0;
    } else {
      this.cnt++;
    }
  }
}