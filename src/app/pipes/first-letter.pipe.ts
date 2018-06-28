import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'firstletterup'
})
export class FirstLetter implements PipeTransform {
    transform(value:string) {
        if (value) {
            return value.substr(0,1).toUpperCase() + value.slice(1);
        }
        return value;
    }
}