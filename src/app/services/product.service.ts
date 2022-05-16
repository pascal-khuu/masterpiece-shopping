import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private urlApi: string;
  constructor(private http:HttpClient) {
    this.urlApi = 'http://localhost:8080';
   }

  createNewProduct(newProduct:Product){
    const token = localStorage.getItem("token");
    return this.http.post(
      `${this.urlApi}/products/create`,
      newProduct,
      { headers: { Authorization: `Bearer ${token}` } }
    )
  }

  getProducts():Observable<Product[]> {
    const token = localStorage.getItem("token");
    return this.http.get<Product[]>(
      `${this.urlApi}/products`,
      { headers: { Authorization: `Bearer ${token}` } }
    )
  }
}
