import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';

export class User {
  constructor(public id: number, public name: string) { }
}

const USERS = [
  new User(1, '첫번째 사용자'),
  new User(2, '두번째 사용자'),
  new User(3, '세번째 사용자')
];

export let userPromise = Promise.resolve(USERS);


@Injectable()
export class AuthService {
  isLogin: boolean = false;
  redirectUrl: string;
  userId: string;

  checkId(userId: string): Promise<User> {
    return userPromise
      .then(children => children.find(children => children.id === +userId));
  }

  login(userId: string): Observable<boolean> {
    return Observable.of(true).delay(500).do(val => this.isLogin = true).do(val => this.userId = userId);
  }

  logout(): void {
    this.isLogin = false;
  }
}