import { Component } from '@angular/core';

@Component({
    selector: 'cmp-lifecycle',
    template: `
    <button (click)="toggle()">Content 상태변경</button>
    <button (click)="isShow=!isShow">{{isShow==false?'컴포넌트 추가':'컴포넌트 삭제'}}</button>    
    <br>
    <child-cmp *ngIf="isShow" [prop]="shouldShow">
        <my-cmp value="{{shouldShow}}"></my-cmp>
    </child-cmp>`
})
export class CmpLifecycleComponent {
    isShow: boolean = false;

    shouldShow = true;
    toggle() { this.shouldShow = !this.shouldShow; }
}