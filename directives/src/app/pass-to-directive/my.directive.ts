import { Directive, Attribute, Input} from '@angular/core';

@Directive({
  selector: '[myDirective]', 
  host: {
    '(click)': 'onMouseClick()'
  }
})
export class myDirective {
  constructor( @Attribute('staticValue') private staticValue: String) { }

  onMouseClick() {
    alert("속성 바인딩 값 : "+this._inputValue + "\n속성 값 : " + this.staticValue);
  }
  
  _inputValue: string;
  @Input() set inputValue(status: string) {
    this._inputValue = status;
  }
}