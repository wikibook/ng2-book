import { Directive,Input } from '@angular/core';

@Directive({
    selector: '[button-click]',
    host: { '(click)': 'onClick()' }
})
export class ButtonClickDirective{
    @Input() prop: string;
    onClick() { console.log("\n지시자 : onClick() 메서드 호출"); }

    constructor() { console.log("\n1-지시자 : constructor()"); }    
    ngOnChanges() { console.log("2--지시자 : ngOnChanges()"); }
    ngOnInit() { console.log("3---지시자 : ngOnInit()"); }
    ngDoCheck() { console.log("4----지시자 : ngDoCheck()"); }        
	ngOnDestroy() { console.log("5---------지시자 : ngOnDestroy()"); }
    
}