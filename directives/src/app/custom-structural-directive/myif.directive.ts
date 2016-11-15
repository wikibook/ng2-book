import { Directive, Input } from '@angular/core';
import { TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({ selector: '[myIf]' })
export class MyIfDirective {
  constructor(
    private _templateRef: TemplateRef<any>,
    private _container: ViewContainerRef
    ) { }
  @Input() set myIf(status: boolean) {    
    if (status) {
      this._container.createEmbeddedView(this._templateRef);
    } else {
      this._container.clear();
    }
  }
}