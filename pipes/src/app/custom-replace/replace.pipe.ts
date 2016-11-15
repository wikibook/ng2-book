import { Pipe } from '@angular/core';

@Pipe({
    name: 'replace'
})
export class ReplacePipe{
    transform(value,search,newvalue){
		return value.replace(search,newvalue);
	}
}