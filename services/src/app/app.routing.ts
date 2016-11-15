import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { IntroComponent } from './intro.component';
import { HelloComponent } from './hello/hello.component';
import { MockComponent } from './mock/mock.component';
import { PromiseComponent } from './promise/promise.component';

import { OopComponent } from './oop-service/oop.component';

import { ParentComponent } from './shared-service/parent.component';


const appRoutes: Routes = [
  { path: '', component: IntroComponent },
  { path: 'hello', component: HelloComponent },
  { path: 'mock', component: MockComponent },
  { path: 'promise', component: PromiseComponent },
  { path: 'oop-service', component: OopComponent },
  { path: 'shared-service', component: ParentComponent }

];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);