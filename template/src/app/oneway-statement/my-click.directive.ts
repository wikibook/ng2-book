import { Directive, ElementRef, EventEmitter, Output } from '@angular/core';

@Directive({selector: '[myClick]'})
export class MyClickDirective {

  toggle = false;

  @Output('myClick') clicks = new EventEmitter<string>();
  constructor(el: ElementRef) {
    
    el.nativeElement.addEventListener('click', (event: Event) => {
        this.toggle = !this.toggle;
        this.clicks.emit(this.toggle ? '선택했습니다.' : '해제했습니다.');
    });

  }
}