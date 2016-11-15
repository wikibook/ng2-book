import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import {
  routing,
  appRoutingProviders
} from './app.routing';
import { AppComponent } from './app.component';
import { IntroComponent } from './intro.component';

import { MyComponent } from './cmp/my-component.component';

import { TestHighlightComponent } from './directive/test-highlight.component';
import { HighlightDirective } from './directive/highlight.directive';


import { TestServiceComponent } from './service/test-service.component';

@NgModule({
  imports: [BrowserModule, FormsModule, routing],
  declarations: [AppComponent, IntroComponent,
    MyComponent,
    TestHighlightComponent, HighlightDirective,
    TestServiceComponent
  ],
  providers: [
    appRoutingProviders, { provide: APP_BASE_HREF, useValue: '/' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }