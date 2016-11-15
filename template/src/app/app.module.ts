import { BrowserModule } from '@angular/platform-browser';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms'; //ngModel binding
import { NgModule } from '@angular/core';

import { routing,
  appRoutingProviders }  from './app.routing';
import { AppComponent } from './app.component';
import { IntroComponent } from './intro.component';
import { InterpolationComponent } from './interpolation/interpolation.component';

import { OnewayStatementComponent } from './oneway-statement/oneway-statement.component';
import { ContactComponent } from './oneway-statement/contact.component';
import { MyClickDirective } from './oneway-statement/my-click.directive';

import { OnewayExpressionComponent } from './oneway-expression/oneway-expression.component';
import { TwowayNgmodelComponent } from './twoway-ngmodel/twoway-ngmodel.component';

import { NgclassComponent } from './ngclass/ngclass.component';
import { NgstyleComponent } from './ngstyle/ngstyle.component';
import { NgifComponent } from './ngif/ngif.component';
import { NgswitchComponent } from './ngswitch/ngswitch.component';
import { NgForComponent } from './ngfor/ngfor.component';
import { TemplateInputVariablesComponent } from './template-input-variables/template-input-variables.component';
import { TemplateReferenceVariablesComponent } from './template-reference-variables/template-reference-variables.component';
import { TemplateNgforComponent } from './template-ngfor/template-ngfor.component';

@NgModule({
  declarations: [
    AppComponent, IntroComponent, InterpolationComponent,
   OnewayStatementComponent, 
   ContactComponent, MyClickDirective, 
   OnewayExpressionComponent, TwowayNgmodelComponent,
   NgclassComponent, NgstyleComponent, NgifComponent, NgswitchComponent, NgForComponent,   
   TemplateInputVariablesComponent, TemplateReferenceVariablesComponent,
   TemplateNgforComponent
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