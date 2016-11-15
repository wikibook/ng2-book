import { Injectable } from '@angular/core';

export class Member {
  constructor(public name: string,public age: number) { }
}

const MEMBERS: Member[] = [
  new Member('유비',30),
  new Member('관우',29),
  new Member('장비',28)
];

@Injectable()
export class MemberService {

  getMembers() {
    return new Promise<Member[]>(resolve => {
      setTimeout(() => { resolve(MEMBERS); }, 500);
    });
  }

  getMember(name: string) {
    return this.getMembers()
      .then(members => members.find(member => member.name == name));
  }
  
}