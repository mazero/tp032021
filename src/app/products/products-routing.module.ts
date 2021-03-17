import { ProductsAddEditComponent } from './products-add-edit/products-add-edit.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
      path: '', component: ProductsComponent,
      children: [
        { path: '', component: ProductsListComponent},
        { path: 'add', component: ProductsAddEditComponent },
        { path: 'edit/:id', component: ProductsAddEditComponent}
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
