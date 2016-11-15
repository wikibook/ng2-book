import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { IntroComponent } from './intro.component';

import { CustomAttrDirectiveCmp } from './custom-attr-directive/custom-attr-directive.component';
import { CustomDirectiveCmp } from './custom-directive/custom-directive.component';
import { CustomStructuralDirectiveCmp } from './custom-structural-directive/custom-structural-directive.component';
import { PassToDirectiveComponent } from './pass-to-directive/pass-to-directive.component';
import { BindingToDirectiveComponent } from './binding-to-directive/binding-to-directive.component';
import { HighlightComponent } from './highlight/highlight.component';
import { InputDecoratorComponent } from './input-decorator/input-decorator.component';
import { ElementRendering } from './element-rendering/element-rendering.component';

const appRoutes: Routes = [
  { path: '', component: IntroComponent },
  { path: 'custom-directive', component: CustomDirectiveCmp },
  { path: 'custom-attr-directive', component: CustomAttrDirectiveCmp },
  { path: 'custom-structural-directive', component: CustomStructuralDirectiveCmp },
  { path: 'pass-to-directive', component: PassToDirectiveComponent },
  { path: 'binding-to-directive', component: BindingToDirectiveComponent },
  { path: 'highlight', component: HighlightComponent },
  { path: 'element-rendering', component: ElementRendering }
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);