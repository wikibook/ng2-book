import {AfterViewInit, Component, Directive, Input, ViewChild} from '@angular/core';

@Directive({ selector: 'item' })
export class Item {
  @Input() status: boolean;
}

@Component({
  selector: 'item-component',
  template: '<button>알림창</button>'
})
export class ItemComponent {
  display(){
    alert('ItemComponent입니다');     
  }
}

@Component({
  selector: 'app-view-child',
  template: `
    <item status="false" *ngIf="isShow==false"></item>
    <item status="true" *ngIf="isShow==true"></item>    
    <button (click)="toggle()">선택</button><br>
    isShow : {{isShow}}<br>
    status : {{status}}<br>    
    <item-component (click)="display()"></item-component>`
})
export class ViewchildComponent {

  @ViewChild(Item)
  set item(v: Item) {    
    setTimeout(() => { this.status = v.status; }, 0);
  }

  @ViewChild(ItemComponent) itemComponent: ItemComponent;
  isShow: boolean = true;
  status: boolean;
 
  toggle() {
    this.isShow = !this.isShow;
  }

  display(){
    this.itemComponent.display();
  }
  
}