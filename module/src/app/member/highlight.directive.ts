import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {

  private el: HTMLElement;
  constructor(el: ElementRef) {
    this.el = el.nativeElement;
    this.el.style.fontSize = "30px";
  }
  @HostListener('mousemove') onMouseMove() {
    this.el.style.backgroundColor = "blue";
    this.el.style.color ="white";
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.el.style.backgroundColor = null;
    this.el.style.color ="black";
  }
}