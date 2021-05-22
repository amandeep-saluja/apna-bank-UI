import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'formatNumber'
})
export class FormatNumberPipe implements PipeTransform {

    transform(value: string, ...args: number[]): string {
        let transformedNumber: string = '';
        let splitAtIndex: number = 4;
        if (args.length > 0) {
            splitAtIndex = args[0];
        }
        if (typeof value === 'string') {
            for (let i = 0; i < value.length; i++) {
                if (i % splitAtIndex == 0 && i != 0 && i != value.length) {
                    transformedNumber += '-';
                }
                transformedNumber += value[i];
            }
        }
        return transformedNumber;
    }

}
