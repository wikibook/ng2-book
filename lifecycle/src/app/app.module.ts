import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; //ngModel binding

import { routing, appRoutingProviders } from './app.routing';
import { AppComponent } from './app.component';
import { IntroComponent } from './intro.component';

import { CmpLifecycleComponent } from './cmp-lifecycle/cmp-lifecycle.component';
import { ChildCmp } from './cmp-lifecycle/child-cmp.component';
import { Window } from './cmp-lifecycle/window.directive';
import { MyCmp } from './cmp-lifecycle/my-cmp.component';

import { DirectiveLifecycleComponent } from './directive-lifecycle/directive-lifecycle.component';
import { MyClickDirective } from './directive-lifecycle/my-click.directive';

import { CmpDirectiveifecycleComponent } from './cmp-directive-lifecycle/cmp-directive-lifecycle.component';
import { ButtonClickDirective } from './cmp-directive-lifecycle/button-click.directive';

@NgModule({
  declarations: [
    AppComponent, IntroComponent,
    CmpLifecycleComponent, ChildCmp, Window, MyCmp,
    DirectiveLifecycleComponent, MyClickDirective,
    CmpDirectiveifecycleComponent, ButtonClickDirective,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    routing
  ],
  providers: [
    appRoutingProviders
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }