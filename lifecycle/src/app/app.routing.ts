import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { IntroComponent } from './intro.component';
import { CmpLifecycleComponent } from './cmp-lifecycle/cmp-lifecycle.component';
import { DirectiveLifecycleComponent } from './directive-lifecycle/directive-lifecycle.component';
import { CmpDirectiveifecycleComponent } from './cmp-directive-lifecycle/cmp-directive-lifecycle.component';

const appRoutes: Routes = [
  { path: '', component: IntroComponent },
  { path: 'cmp-lifecycle', component: CmpLifecycleComponent },
  { path: 'directive-lifecycle', component: DirectiveLifecycleComponent },
  { path: 'cmp-directive-lifecycle', component: CmpDirectiveifecycleComponent },
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);