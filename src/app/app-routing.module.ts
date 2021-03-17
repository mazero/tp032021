import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const productsModule = () => import('./products/products.module').then(x => x.ProductsModule);

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'products', loadChildren: productsModule },
  { path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
