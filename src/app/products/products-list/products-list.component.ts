import { ProductsService } from '@services';
import { Component, OnInit } from '@angular/core';
import { IProduct } from '@app/@interfaces';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  public products: IProduct[] | null = null;

  constructor(private productsService: ProductsService) { }

  ngOnInit(): void {
    this.productsService.getAll()
        .subscribe(products => this.products = products);
  }

}
