import { SharedModule } from '@shared/shared.module';
import { ProductsRoutingModule } from './products-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductsAddEditComponent } from './products-add-edit/products-add-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductsSearchPipe } from './products-search.pipe';

@NgModule({
  declarations: [ProductsComponent, ProductsListComponent, ProductsAddEditComponent, ProductsSearchPipe],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class ProductsModule { }