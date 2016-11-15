import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms'; //for ngModel
import { NgModule } from '@angular/core';
import { routing,
  appRoutingProviders }  from './app.routing';


import { AppComponent } from './app.component';
import { IntroComponent } from './intro.component';
import { BuiltInValidatorComponent } from './built-in-validator/built-in-validator.component';
import { ElementStatusComponent } from './element-status/element-status.component';
import { FormReferenceVariableComponent } from './form-reference-variable/form-reference-variable.component';

import { FormGroupComponent } from './form-group/form-group.component';
import { CustomValidatorsComponent } from './custom-validators/custom-validators.component';
import { FormStatusComponent } from './form-status/form-status.component';


@NgModule({
  declarations: [
    AppComponent, IntroComponent, FormGroupComponent, FormStatusComponent,
  BuiltInValidatorComponent, FormReferenceVariableComponent, CustomValidatorsComponent, ElementStatusComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule, //formGroup
    routing
  ],
   providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
