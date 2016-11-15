import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule }  from '@angular/common';

import { routing,
  appRoutingProviders }  from './app.routing';
import { AppComponent } from './app.component';
import { IntroComponent } from './intro.component';
import { CssKeyframesComponent } from './css-key-frames/css-keyframes.component';
import { SlideMenuComponent } from './slide-menu/slide-menu.component';
import { MessageBoxComponent } from './message-box/message-box.component';
import { TimingComponent } from './timing/timing.component';
import { KeyframesComponent } from './keyframes/keyframes.component';
import { AnimationGroupComponent } from './animation-group/animation-group.component';
import { AnimationCallbackComponent } from './animation-callback/animation-callback.component';

@NgModule({
  declarations: [
    AppComponent, IntroComponent,
    CssKeyframesComponent, TimingComponent,
    SlideMenuComponent, MessageBoxComponent, KeyframesComponent, AnimationGroupComponent,
    AnimationCallbackComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    routing
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }