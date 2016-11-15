import { NgModule }            from '@angular/core';
import { RouterModule }        from '@angular/router';

import { MemberComponent }    from './member.component';

@NgModule({
  imports: [RouterModule.forChild([
    { path: 'member', component: MemberComponent}
  ])],
  exports: [RouterModule]
})
export class MemberRoutingModule {}