import { Directive, Input } from '@angular/core';

@Directive({
    selector: '[my-click]',
    host: { '(click)': 'onClick()' }
})
export class MyClickDirective{
    _prop: string = '';

    @Input()
    set prop(name: string) {
        this._prop = name || '';
        console.log("@Input prop() 세터 메서드 호출");
    }
    onClick() { console.log("지시자 : onClick() 메서드 호출"); }
    constructor() { console.log("1-지시자 : constructor()"); }    
    ngOnChanges() { console.log("2--지시자 : ngOnChanges()"); }
    ngOnInit() { console.log("3---지시자 : ngOnInit()"); }
    ngDoCheck() { console.log("4----지시자 : ngDoCheck()"); }    
    ngAfterContentInit() { console.log("5-----지시자 : ngAfterContentInit()"); }
    ngAfterContentChecked() { console.log("6------지시자 : ngAfterContentChecked()"); }
    ngAfterViewInit() { console.log("7-------지시자 : ngAfterViewInit()"); }
    ngAfterViewChecked() { console.log("8--------지시자 : ngAfterViewChecked()"); }
	ngOnDestroy() { console.log("9---------지시자 : ngOnDestroy()"); }
}