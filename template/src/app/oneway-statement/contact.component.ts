import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'contactinput',
    template: `
    <div><input #contactname type="text" placeholder="이름" /></div>
    <div><input #contacttele type="text" placeholder="전화번호" /></div>
    <button (click)="handleClick(contactname.value, contacttele.value)">저장</button>`
})
 
export class ContactComponent {

    @Output() save: EventEmitter<any> = new EventEmitter();
    
    public handleClick(name: string, tele: string): void {
        this.save.next({name: name, telephone: tele});
    }
}