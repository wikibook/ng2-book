import { Injectable } from '@angular/core';

@Injectable()
export class SharedService {
  num: number;
  message: string;
  public names: string[] = [];
  addName(data: string) {
    this.names.unshift(data);
  }
}
