import { Directive, ElementRef, Input, OnChanges, Renderer } from '@angular/core';

@Directive({ selector: '[highlight]' })

export class HighlightDirective implements OnChanges {

  defaultColor =  'gray';

  @Input('highlight') bgColor: string;

  constructor(private renderer: Renderer, private el: ElementRef) {
    renderer.setElementProperty(el.nativeElement, 'myProperty', true);
  }

  ngOnChanges() {
    this.renderer.setElementStyle(
      this.el.nativeElement, 'backgroundColor',
      this.bgColor || this.defaultColor );
  }
}