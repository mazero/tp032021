import { environment } from '@env/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { IProduct } from '@app/@interfaces';

const apiUrl = environment.apiUrl;
const routes = {
    all: () => `${apiUrl}/products`,
    one: (id: number) => `${apiUrl}/products/${id}`,
    create: () => `${apiUrl}/products`,
    update: (id: number) => `${apiUrl}/products/${id}`,
    delete: (id: number) => `${apiUrl}/products/${id}`,
}

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  public getAll(): Observable<IProduct[]> {
    return this.http.get(routes.all()).pipe(
      map((body: any) => body),
      catchError(() => of('Error, could not load products.'))
    );
  }

  public getById(id: number): Observable<IProduct> {
    return this.http.get(routes.one(id)).pipe(
      map((body: any) => body),
      catchError(() => of('Error, could not load product.'))
    );
  }

  public create(product: IProduct): Observable<IProduct> {
    return this.http.post(routes.create(), product).pipe(
      map((body: any) => body),
      catchError(() => of('Error, could not create product.'))
    )
  }

  public update(id: number, product: IProduct): Observable<IProduct> {
    return this.http.put(routes.update(id), product).pipe(
      map((body: any) => body),
      catchError(() => of('Error, could not update product.'))
    )
  }

  public delete(id:number): Observable<IProduct> {
    return this.http.delete(routes.delete(id)).pipe(
      map((body: any) => body),
      catchError(() => of('Error, could not delete product.'))
    )
  }
}
