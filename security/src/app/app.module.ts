import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms'; //ngModel binding

import { routing,
  appRoutingProviders }  from './app.routing';
import { AppComponent } from './app.component';
import { IntroComponent } from './intro.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { InnerhtmlComponent } from './innerhtml/innerhtml.component';
import { TrusthtmlComponent } from './trusthtml/trusthtml.component';
import { TrustresourceurlComponent } from './trustresourceurl/trustresourceurl.component';
import { TruststyleComponent,Safe } from './truststyle/truststyle.component';
import { TrusturlComponent } from './trusturl/trusturl.component';

@NgModule({
  declarations: [
    AppComponent, IntroComponent,
    InnerhtmlComponent, InterpolationComponent, TrusthtmlComponent,
    TrustresourceurlComponent, 
    TruststyleComponent, Safe,
    TrusturlComponent
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