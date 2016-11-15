import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Person } from './person';

@Component({
    selector: 'item-edit',
    template: `
    <div *ngIf="isEdit">
        <input type="text" #input placeholder="수정할 내용" [(ngModel)]="editedName">
        <button (click)="put(input.value)">저장</button>
        <button (click)="delete()">삭제</button>
        <button (click)="isEdit=false">취소</button>
    </div>
    <div *ngIf="isEdit === false">
        <button (click)="isEdit=true">수정</button>
    </div>`,
    styles: [`div{float:right}`]
})
export class ItemEditComponent {
    @Input() persons: Person;
    @Output() public doPut: EventEmitter<any> = new EventEmitter();
    @Output() public doDelete: EventEmitter<any> = new EventEmitter();

    private isEdit: boolean = false;
    editedName: string;

    put(value) {
        this.persons.name = this.editedName;
        this.doPut.emit(this.persons);
        this.isEdit = false;

    }
    delete() {
        if (confirm("삭제하시겠습니까?")) {
            this.doDelete.emit(this.persons);
            this.isEdit = false;
        }
    }

    ngOnInit() {
        this.editedName = this.persons.name;
    }
}