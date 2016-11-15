import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { IntroComponent } from './intro.component';

import { FactoryComponent } from './factory/factory.component';
import { ReflectiveInjectorComponent } from './reflective-injector/reflective-injector.component';
import { ClassProviderComponent } from './class-provider/class-provider.component';
import { AliasedClassProviderComponent } from './class-provider/aliased-class-provider.component';
import { FactoryProviderComponent } from './factory-provider/factory-provider.component';
import { ValueProviderComponent } from './value-provider/value-provider.component';
import { WithoutDiComponent } from './without-di/without-di.component';
import { OpaqueTokenComponent } from './opaque-token/opaque-token.component';
import { OptionalDecoratorComponent } from './optional-decorator/optional-decorator.component';

const appRoutes: Routes = [
  { path: '', component: IntroComponent },
  { path: 'factory', component: FactoryComponent },
  { path: 'reflective-injector', component: ReflectiveInjectorComponent },
  { path: 'class-provider', component: ClassProviderComponent },
  { path: 'aliased-class-provider', component: AliasedClassProviderComponent },  
  { path: 'factory-provider', component: FactoryProviderComponent },
  { path: 'value-provider', component: ValueProviderComponent },
  { path: 'without-di', component: WithoutDiComponent },
  { path: 'opaque-token', component: OpaqueTokenComponent },
  { path: 'optional-decorator', component: OptionalDecoratorComponent },
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);