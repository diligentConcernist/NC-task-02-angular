import { Pipe, PipeTransform } from '@angular/core';
  
@Pipe({
    name: 'format_name'
})

export class NameFormat implements PipeTransform {
  transform(value: string, args?: any): string {

    return (value.slice(0,1).toUpperCase() + value.slice(1).toLowerCase());
  }
}