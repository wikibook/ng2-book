import { Injectable, Optional } from '@angular/core';

export class UserServiceConfig {
  nickName = '';
}

@Injectable()
export class UserService {
  private _nickName = '';

  constructor( @Optional() config: UserServiceConfig) {
    if (config) { this._nickName = config.nickName; }
  }

  get nickName() {
    return this._nickName;
  }
}