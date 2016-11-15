import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { PlayerComponent } from './player.component';

@NgModule({
  imports: [RouterModule.forChild([
    { path: '', redirectTo: 'player', pathMatch: 'full' },
    { path: 'player', component: PlayerComponent }
  ])],
  exports: [RouterModule]
})
export class PlayerRoutingModule { }