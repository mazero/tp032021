import { IProduct } from '@app/@interfaces';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'productsSearch'
})
export class ProductsSearchPipe implements PipeTransform {

  transform(value: IProduct[], term: string = ''): IProduct[] {
    if(Array.isArray(value)) {
      return value.filter(product => {
        const title = product.title.toLowerCase();
        return title.indexOf(term.toLowerCase()) >  -1;
      })
    } else {
      return [];
    }
  }

}
