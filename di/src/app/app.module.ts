import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms'; //ngModel binding

import { routing,
  appRoutingProviders }  from './app.routing';
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
import { MY_API_CONFIG, OpaqueTokenProvider } from './opaque-token/opaque-token.provider';

import { OptionalDecoratorComponent } from './optional-decorator/optional-decorator.component';

import { Engine, Speedmeter } from './factory-provider/car.service';


@NgModule({
  declarations: [
    AppComponent, IntroComponent,
    FactoryComponent, ReflectiveInjectorComponent, ClassProviderComponent, AliasedClassProviderComponent,
    FactoryProviderComponent,
    ValueProviderComponent,
    WithoutDiComponent, OpaqueTokenComponent, OptionalDecoratorComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    routing
  ],
  providers: [
    appRoutingProviders,
    Engine, Speedmeter,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }