import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PlayerRoutingModule } from './player-routing.module';
import { PlayerComponent } from './player.component';

@NgModule({
  imports: [PlayerRoutingModule],
  declarations: [PlayerComponent],
  providers: []
})
export class PlayerModule { }