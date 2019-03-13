import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reversetext'
})
export class ReversetextPipe implements PipeTransform {

  transform(value: string, args?: any): string {
    if (!value) { return ''; }
    return value.split('').reverse().join('');
  }

}
