import { Directive,ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {

  private el: HTMLElement;
  constructor(el: ElementRef) { 
    this.el = el.nativeElement;
    this.el.style.fontSize="30px";
    this.el.style.padding="10px"; 
  }
  
  private _defaultColor = '#F1F1F1';
  @Input() set defaultColor(colorName:string){
    this._defaultColor = colorName || this._defaultColor;
  }


  private highlight(color:string) {
    this.el.style.backgroundColor = color;
    this.el.style.fontWeight= 'bold';
    this.el.style.border ="2px dotted red";
  }

  @Input('highlight') highlightColor: string;
  @HostListener('mouseenter') onMouseEnter() { this.highlight(this.highlightColor || this._defaultColor); }
  @HostListener('mouseleave') onMouseLeave() { this.highlight(null); }  
  @HostListener('mousemove') onMouseMove() {
    let randomColor="#"+((1<<24)*Math.random()|0).toString(16);
    this.el.style.color=randomColor;
  } 
}