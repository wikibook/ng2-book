import { Directive, Attribute, Input, Output, EventEmitter} from '@angular/core';

@Directive({
  selector: '[alertMsg]', 
  host: {
    '(click)': 'onMouseClick()'
  }
})
export class AlertDirective {
  constructor( @Attribute('staticValue') private staticValue: String) { }

  @Output() outputProperty = new EventEmitter<Object>();
    
  onMouseClick() {
    let msg:Object={
      'msg' : '지시자입니다.',
      'static':this.staticValue,
      'input' : this._inputValue
    };
    this.outputProperty.emit(msg);
    
  }
 
  _inputValue: string;
  @Input() set inputValue(status: string) {    
    this._inputValue = status;
    
  }
}