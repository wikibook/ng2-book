import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms'; //ngModel binding
import { routing, appRoutingProviders }  from './app.routing';
import { AppComponent } from './app.component';
import { IntroComponent } from './intro.component';

import { CustomAttrDirectiveCmp } from './custom-attr-directive/custom-attr-directive.component';
import { CustomAttrDirective } from './custom-attr-directive/custom-attr.directive';

import { CustomDirectiveCmp } from './custom-directive/custom-directive.component';
import { MyClickDirective } from './custom-directive/my-click.directive';

import { CustomStructuralDirectiveCmp } from './custom-structural-directive/custom-structural-directive.component';
import { MyIfDirective } from './custom-structural-directive/myif.directive';

import { PassToDirectiveComponent } from './pass-to-directive/pass-to-directive.component';
import { myDirective } from './pass-to-directive/my.directive';

import { BindingToDirectiveComponent } from './binding-to-directive/binding-to-directive.component';
import { AlertDirective } from './binding-to-directive/alert.directive';

import { HighlightComponent } from './highlight/highlight.component';
import { HighlightDirective } from './highlight/highlight.directive';

import { ElementRendering, MyElementRef, MyRenderer } from './element-rendering/element-rendering.component';


@NgModule({
  declarations: [
    AppComponent, IntroComponent,
    CustomAttrDirectiveCmp, CustomAttrDirective,
    CustomDirectiveCmp, MyClickDirective, 
    CustomStructuralDirectiveCmp, MyIfDirective,
    PassToDirectiveComponent, myDirective,
    BindingToDirectiveComponent, AlertDirective,
    HighlightComponent, HighlightDirective,
    ElementRendering, MyElementRef, MyRenderer
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