import { NgModule }           from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule }        from '@angular/forms';

import { MemberListComponent }   from './member-list.component';
import { HighlightDirective } from './highlight.directive';
import { MemberRoutingModule }   from './member-routing.module';
import { MemberService }     from './member.service';

@NgModule({
  imports:      [ CommonModule, FormsModule, MemberRoutingModule ],
  declarations: [ MemberListComponent, HighlightDirective ],
  providers:    [ MemberService ]
})
export class MemberModule { }