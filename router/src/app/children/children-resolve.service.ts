import { Injectable } from '@angular/core';
import { Router, Resolve, ActivatedRouteSnapshot } from '@angular/router';

import { Children, ChildrenService } from './children.service';

@Injectable()
export class ChildrenResolve implements Resolve<Children> {
  constructor(private cs: ChildrenService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot): Promise<Children> | boolean {

    let id = +route.params['id'];

    return this.cs.findById(id).then(children => {
      if (children) {
        return children;
      } else {
        this.router.navigate(['/not-found']);
        return false;
      }
    });
  }
}