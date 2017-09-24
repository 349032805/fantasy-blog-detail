import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'translate'})
export class TranslatePipe implements PipeTransform {
  transform(value: string): string {
    if(value =='web'){
      return '网站'
    }

    if(value =='life'){
      return '生活'
    }

    return value;
  }
}