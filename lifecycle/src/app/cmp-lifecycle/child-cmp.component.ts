import { Component, Input, ContentChild, ViewChild, OnChanges, DoCheck, OnInit, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';
import { MyCmp } from './my-cmp.component';
import { Window } from './window.directive';

@Component({
    selector: 'child-cmp',
    template: `<input type="text" [(ngModel)]="message" placeholder="바인딩 있음"> <input type="text" placeholder="바인딩 없음">
    <window id="1" *ngIf="shouldShow"></window>
    <window id="2" *ngIf="!shouldShow"></window>
    <button (click)="toggle()">View 상태변경</button>`
})
export class ChildCmp implements OnChanges, DoCheck, OnInit, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
    message: string = "";
    oldMessage: string = "";

    constructor() { console.log("\n1-컴포넌트 : constructor()"); }

    @Input()
    set prop(name: string) {
        console.log("@Input prop() 세터 메서드 호출");
    }
    ngOnChanges() { console.log("2--컴포넌트 : ngOnChanges()"); }
    ngOnInit() { console.log("3---컴포넌트 : ngOnInit()"); }
    ngDoCheck() {
        console.log("4----컴포넌트 : ngDoCheck()");
        if (this.message != this.oldMessage) {
            console.log("4----컴포넌트 : ngDoCheck()에서 변화감지");
            this.oldMessage = this.message;
        }
    }

    @ContentChild(MyCmp) myCmp: MyCmp;
    oldMyCmpId: any;
    ngAfterContentInit() {
        console.log("5-----컴포넌트 : ngAfterContentInit()");
        this.oldMyCmpId = this.myCmp.value;
        
    }
    ngAfterContentChecked() {
        console.log("6------컴포넌트 : ngAfterContentChecked()");
        
        if (this.oldMyCmpId != this.myCmp.value) {
            console.log("6------컴포넌트 : ngAfterContentChecked()에서 변화감지");
            this.oldMyCmpId = this.myCmp.value;
        }
    }

    
    shouldShow = true;
    toggle() { this.shouldShow = !this.shouldShow; }

    @ViewChild(Window) window;
    oldWindowId: any;
    ngAfterViewInit() {
        console.log("7-------컴포넌트 : ngAfterViewInit()");
        this.oldWindowId = this.window.id;
    }

    ngAfterViewChecked() {
        console.log("8--------컴포넌트 : ngAfterViewChecked()");
        if (this.oldWindowId != this.window.id) {
            console.log("8--------컴포넌트 : ngAfterViewChecked()에서 변화감지");
            this.oldWindowId = this.window.id;
        }
    }
    ngOnDestroy() { console.log("9---------컴포넌트 : ngOnDestroy()"); }
}