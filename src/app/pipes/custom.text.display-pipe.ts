import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customTextDisplay'
})
export class CustomTextDisplayPipe implements PipeTransform {
  transform(value: string, type?: string): string {
    if (value == null || value.length < 1) {
      return value;
    }

    switch (type) {
      case 'firstCharOnly':
        return value.charAt(0).toUpperCase() + value.slice(1);
      case 'firstCharEachWord':
        return value.split(' ')
          .reduce((previous, current) =>
            previous + ' ' + current.charAt(0).toUpperCase() + current.slice(1),
            '');
      default:
        return value;
    }
  }
}
