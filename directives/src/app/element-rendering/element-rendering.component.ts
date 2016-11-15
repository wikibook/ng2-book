import { Component, OnInit } from '@angular/core';
import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({selector: '[my-elment-ref]'})
export class MyElementRef{
  constructor(public el: ElementRef, public renderer: Renderer) {    
    this.el.nativeElement.style.backgroundColor  = 'orange';
  }
}

@Directive({selector: '[my-renderer]'})
export class MyRenderer {
  constructor(public el: ElementRef, public renderer: Renderer) {    
    renderer.setElementStyle(el.nativeElement, 'background', 'aqua');
  }
}

@Component({
  selector: 'app-element-rendering',
  template: `
  <div my-elment-ref>1. nativeElement 방식</div>
  <div my-renderer>2. Renderer 방식 </div>`  
})

export class ElementRendering {}