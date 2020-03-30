import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe<T> implements PipeTransform {

  public transform(list: T[], searchStr: string, searchProps: string[] = []): T[] {
    if (!searchStr || !list || list.length === 0) {
      return list;
    }
    searchStr = searchStr.toLowerCase();
    if (searchProps.length) {
      return list.filter( (item: T) => {
        return searchProps.some( prop => {
          const val = prop.split('.').reduce((dataObj, subPro) => {
            return dataObj[subPro];
          }, item);
          return val.toString().toLowerCase().includes(searchStr);
        } );
      } );
    } else {
      return list.filter( (item: T) => {
        return Object.keys(item)
          .some( prop => item[prop].toString().toLowerCase().includes(searchStr) );
      } );
    }
  }


}

