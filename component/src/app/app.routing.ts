import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { IntroComponent } from './intro.component';
import { ChildToParentComponent } from './child-to-parent/child-to-parent.component';
import { ParentToChildInputsComponent } from './parent-to-child-inputs/parent-to-child-inputs.component';
import { ParentToChildInputComponent } from './parent-to-child-input/parent-to-child-input.component';
import { ComponentStyleComponent } from './component-style/component-style.component';
import { NestedParentComponent } from './nested-component/parent.component';
import { ViewchildComponent } from './viewchild/viewchild.component';
import { HelloComponent } from './hello/hello.component';
import { ViewchildrenComponent } from './viewchildren/viewchildren.component';
import { ContentChildrenComp } from './contentchildren/contentchildren.component';
import { ContentChildComp } from './contentchild/contentchild.component';

const appRoutes: Routes = [
    { path: '', component: IntroComponent },
    { path: 'child-to-parent', component: ChildToParentComponent },
    { path: 'parent-to-child-inputs', component: ParentToChildInputsComponent },
    { path: 'parent-to-child-input', component: ParentToChildInputComponent },
    { path: 'component-style', component: ComponentStyleComponent  },
    { path: 'nested-component', component: NestedParentComponent  },
    { path: 'viewchild', component: ViewchildComponent  },
    { path: 'hello', component: HelloComponent  },
    { path: 'viewchildren', component: ViewchildrenComponent  },
    
    { path: 'contentchild', component: ContentChildComp  },
    { path: 'contentchildren', component: ContentChildrenComp  },
    
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);