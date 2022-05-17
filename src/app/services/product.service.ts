import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Brand } from '../models/brand';
import { Categorie } from '../models/categorie';
import { Product } from '../models/product';
import { Size } from '../models/size';

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

    const body = {
      "productName": newProduct.productName,
      "price": newProduct.price,
      "fabrics": newProduct.fabrics,
      "numberStock": newProduct.numberStock,
      "mainCategoryId": newProduct.category,
      "mainBrandId": newProduct.brand,
      "mainSizeId": newProduct.size

    }
    return this.http.post(
      `${this.urlApi}/products/create`,
      body,
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

  getBrands(): Observable<Brand[]> {
    const token = localStorage.getItem("token");
    return this.http.get<Brand[]>(
      `${this.urlApi}/products/brands`,
      { headers: { Authorization: `Bearer ${token}` } }
    )
  }
  getCategories(): Observable<Categorie[]> {
    const token = localStorage.getItem("token");
    return this.http.get<Categorie[]>(
      `${this.urlApi}/products/categories`,
      { headers: { Authorization: `Bearer ${token}` } }
    )
  }
  getSizes(): Observable<Size[]> {
    const token = localStorage.getItem("token");
    return this.http.get<Size[]>(
      `${this.urlApi}/products/sizes`,
      { headers: { Authorization: `Bearer ${token}` } }
    )
  }

  getProductById(productId: string): Observable<Product> {
    const token = localStorage.getItem("token");

    return this.http.get<Product>(`${this.urlApi}/products/byId/${productId}`,
      { headers: { Authorization: `Bearer ${token}` } }
    )
  }
}
