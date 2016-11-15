import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ChildrenComponent } from './children.component';
import { Child1Component } from './child1.component';
import { Child2Component } from './child2.component';
import { Child3Component } from './child3.component';

import { CanDeactivateGuard } from '../can-deactivate-guard.service';
import { ChildrenResolve } from './children-resolve.service';
import { AuthGuard } from '../auth-guard.service';
@NgModule({
    imports: [RouterModule.forChild([
        {
            path: 'children', component: ChildrenComponent,
            children: [{
                path: '',
                component: Child1Component,
                children: [
                    {
                        path: '',
                        canActivate: [AuthGuard],
                        component: Child2Component
                    },
                    {
                        path: ':id',
                        component: Child3Component,
                        canDeactivate: [CanDeactivateGuard],
                        resolve: {
                            childrenResolve: ChildrenResolve
                        }
                    }
                ]
            }]
        },
        {
            path: 'active', component: ChildrenComponent,
            children: [{
                path: '',
                canActivateChild: [AuthGuard],
                children: [
                    { path: 'child1', component: Child1Component },
                    { path: 'child2', component: Child3Component },
                    { path: '', component: Child1Component }
                ]
            }]
        }
    ])],
    exports: [RouterModule]
})
export class ChildrenRoutingModule { }