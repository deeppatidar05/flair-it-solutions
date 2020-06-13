import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterNameStartwith'
})
export class FilterNameStartwithPipe implements PipeTransform {

  transform(items: any[], searchText: string[]): any {
    if(!items) return [];
    if(!searchText) return items;
    

    return items.filter( it => {
      let find:boolean = false;
      searchText.forEach(search => {
         find = find || it.name.toLowerCase().startsWith(search.toLowerCase());
      });
      return find;
    });
  }

}
