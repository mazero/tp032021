import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const productsModule = () => import('./products/products.module').then(x => x.ProductsModule);

const routes: Routes = [
  { path: 'products', loadChildren: productsModule },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
