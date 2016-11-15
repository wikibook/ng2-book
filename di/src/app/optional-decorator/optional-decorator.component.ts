import { Component, Injectable, Optional } from '@angular/core';

@Injectable()
export class Engine {
  public name: string = "엔진";
}

@Component({
  selector: 'app-optional-decorator',
  template: `{{msg}}`,
  providers:[Engine]
})
export class OptionalDecoratorComponent {  
  public msg: string;
  constructor( @Optional() public engine: Engine) {
    if (this.engine === null) {
      this.msg = "null입니다.";
    } else {
      this.msg = "의존주입 성공 : " + this.engine.name;
    }
  }
}