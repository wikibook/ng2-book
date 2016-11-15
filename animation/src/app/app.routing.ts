import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { IntroComponent } from './intro.component';
import { CssKeyframesComponent } from './css-key-frames/css-keyframes.component';
import { SlideMenuComponent } from './slide-menu/slide-menu.component';
import { MessageBoxComponent } from './message-box/message-box.component';
import { TimingComponent } from './timing/timing.component';
import { KeyframesComponent } from './keyframes/keyframes.component';
import { AnimationGroupComponent } from './animation-group/animation-group.component';
import { AnimationCallbackComponent } from './animation-callback/animation-callback.component';

const appRoutes: Routes = [
    { path: '', component: IntroComponent },    
    { path: 'css-key-frames', component: CssKeyframesComponent },
    { path: 'slide-menu', component: SlideMenuComponent },
    { path: 'message-box', component: MessageBoxComponent },
    { path: 'timing', component: TimingComponent },
    { path: 'keyframes', component: KeyframesComponent },
    { path: 'animation-group', component: AnimationGroupComponent },
    { path: 'animation-callback', component: AnimationCallbackComponent }

    
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);