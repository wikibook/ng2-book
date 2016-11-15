import { Injectable } from '@angular/core';
import { Parent } from './parent.service';

export interface Child {
  getData();
}

@Injectable()
export class FirstChild implements Child {

  constructor(public parent: Parent) { }

  getData() {
    return [
      { Child: 'FirstChild 서비스' },
      { parent: this.parent.getName() }
    ];
  }
}

@Injectable()
export class SecondChild extends Parent implements Child {
  getData() {
    return [
      { Child: 'SecondChild 서비스' },
      { parent: super.getName() }
    ];
  }
}