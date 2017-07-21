import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'addPlus'
})
export class AddPlusPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value + ' + ' + args;
  }

}
