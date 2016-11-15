import { Component } from '@angular/core';

@Component({
  selector: 'cmp-directive-lifecycle',
  template: `
  <button button-click [prop]="status">button-click</button>
  <button (click)="onClick();status=!status;">onClick()</button>`
})
export class CmpDirectiveifecycleComponent {
  status: boolean=false;
  onClick() { console.log("\n컴포넌트 : onClick() 메서드 호출"); }

  constructor() { console.log("\n1-컴포넌트 : constructor()"); }
  ngOnChanges() { console.log("2--컴포넌트 : ngOnChanges()"); }
  ngOnInit() { console.log("3---컴포넌트 : ngOnInit()"); }
  ngDoCheck() { console.log("4----컴포넌트 : ngDoCheck()"); }  
  ngAfterContentInit() { console.log("5-----컴포넌트 : ngAfterContentInit()"); }
  ngAfterContentChecked() { console.log("6------컴포넌트 : ngAfterContentChecked()"); }
  ngAfterViewInit() { console.log("7-------컴포넌트: ngAfterViewInit()"); }
  ngAfterViewChecked() { console.log("8--------컴포넌트 : ngAfterViewChecked"); }
  ngOnDestroy() { console.log("9---------컴포넌트 : ngOnDestroy()"); }

}