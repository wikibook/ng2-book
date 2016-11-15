import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent }  from './app.component';
import { IntroComponent } from './intro.component';
import { MyComponent } from './cmp/my-component.component';
import { TestHighlightComponent } from './directive/test-highlight.component';
import { TestServiceComponent } from './service/test-service.component';

const appRoutes: Routes = [
  { path: '', component: IntroComponent },
  { path: 'cmp', component: MyComponent },
  { path: 'directive', component: TestHighlightComponent },
  { path: 'service', component: TestServiceComponent }
  
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);