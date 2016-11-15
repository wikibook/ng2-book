import { Component, Directive, Input } from '@angular/core';

@Component({
    selector: 'directive-lifecycle',
    template: `
    <button (click)="isShow=!isShow">{{isShow==false?'지시자 추가':'지시자 삭제'}}</button> <br><br>

    <button (click)="prop=!prop" *ngIf="isShow">상태변경</button>
    <button my-click [prop]="prop" *ngIf="isShow">my-click 지사자 (현재상태 : {{prop}})</button>`
    
})
export class DirectiveLifecycleComponent{    
    isShow: boolean = false;
    prop: boolean = false;
}