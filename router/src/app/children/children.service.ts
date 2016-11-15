export class Children {
  constructor(public id: number, public name: string) { }
}

const CHILDREN = [
  new Children(1, '첫번째 페이지'),
  new Children(2, '두번째 페이지'),
  new Children(3, '세번째 페이지')
];

export let childrenPromise = Promise.resolve(CHILDREN);

import { Injectable } from '@angular/core';

@Injectable()
export class ChildrenService {
  static nextId = 10;
  findById(id: number | string) {
    return childrenPromise
      .then(children => children.find(children => children.id === +id));
  }
}