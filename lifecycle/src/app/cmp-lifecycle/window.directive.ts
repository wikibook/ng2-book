import { Directive, Input } from '@angular/core';

@Directive({ selector: 'window' })
export class Window {
    @Input() id: string;
}