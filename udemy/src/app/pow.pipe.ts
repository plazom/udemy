import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'appPow'
})
export class PowPipe implements PipeTransform {
    transform(value: number, powNumber: number = 1, symb: string = ''): any {
        return symb + Math.pow(value, powNumber);
    }
}