import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { product } from './product/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  // private service = inject(HttpClient);
  constructor(private service:HttpClient) {  }

  getProducts() {
    return this.service.get<{products: product[], total: number}>("https://dummyjson.com/products");
  }
}
