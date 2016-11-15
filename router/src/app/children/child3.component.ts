import { Component } from '@angular/core';
import { Children } from './children.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'child3',
  template: `
  <h3>자식3</h3>
  <input type="text" [(ngModel)]="editName"> {{editName}}
  `
})
export class Child3Component {
  children: Children;
  editName: string;

  constructor(private route: ActivatedRoute) {
  }
  ngOnInit() {
    this.route.data.forEach((data: { childrenResolve: Children }) => {
      this.editName = data.childrenResolve.name;
      this.children = data.childrenResolve;
    });
  }
}