import { Component } from '@angular/core';

import { Member, MemberService } from './member.service';

@Component({
  selector: 'member-list',
  template: `  
  {{name}}의 나이 : {{age}}<br>
  <div *ngFor='let m of members' highlight (mouseover)="setAge(m.name)">
    {{m.name}} {{m.age}}      
  </div>`
})
export class MemberListComponent {
  members: Member[];
  age: number;
  name: string;
  
  constructor(private memberService: MemberService) {}

  ngOnInit() {
    this.memberService.getMembers().then(members => {
      this.members = members;
    });
    this.setAge("유비");
  }

  setAge(name: string){
    this.name = name;
    this.memberService.getMember(name).then(member => {
      this.age = member.age;
    });
  }
}