import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Brand } from '../models/brand';
import { Categorie } from '../models/categorie';
import { Fabrics } from '../models/fabrics';
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
      "numberStock": newProduct.numberStock,
      "mainCategoryId":  newProduct.category,
      "mainBrandId": newProduct.brand,
      "mainSizeId": newProduct.size,
      "mainFabricsId": newProduct.fabrics
    }
    return this.http.post(
      `${this.urlApi}/products`,
      body,
      { headers: { Authorization: `Bearer ${token}` } }
    )
  }

  getProducts():Observable<Product[]> {
    const token = localStorage.getItem("token");
    return this.http.get<Product[]>(
      `${this.urlApi}/products`,
      {  }
    )
  }

  getProductsUpdate(): Observable<Product[]> {
    const token = localStorage.getItem("token");
    return this.http.get<Product[]>(
      `${this.urlApi}/products/viewProductUpdate`,
      { headers: { Authorization: `Bearer ${token}` }}
    )
  }

  getBrands(): Observable<Brand[]> {
    const token = localStorage.getItem("token");
    return this.http.get<Brand[]>(
      `${this.urlApi}/brands`,
      { headers: { Authorization: `Bearer ${token}` } }
    )
  }

  getCategories(): Observable<Categorie[]> {
    const token = localStorage.getItem("token");
    return this.http.get<Categorie[]>(
      `${this.urlApi}/categories`,
      { headers: { Authorization: `Bearer ${token}` } }
    )
  }
  getSizes(): Observable<Size[]> {
    const token = localStorage.getItem("token");
    return this.http.get<Size[]>(
      `${this.urlApi}/sizes`,
      { headers: { Authorization: `Bearer ${token}` } }
    )
  }

  getFabrics(): Observable<Fabrics[]> {
    const token = localStorage.getItem("token");
    return this.http.get<Fabrics[]>(
      `${this.urlApi}/fabrics`,
      { headers: { Authorization: `Bearer ${token}` } }
    )
  }

  getProductById(productId: string): Observable<Product> {
    const token = localStorage.getItem("token");
    return this.http.get<Product>(`${this.urlApi}/products/${productId}`,
      { headers: { Authorization: `Bearer ${token}` } }
    )
  }

  updateProduct(product: Product): Observable<any> {
    const token = localStorage.getItem("token");
    return this.http.put<any>(`${this.urlApi}/products/${product.id}`,
      product,
      { headers: { Authorization: `Bearer ${token}` } }
    )
  }

  deleteProduct(productId: string) {
    const token = localStorage.getItem("token");

    return this.http.delete(`${this.urlApi}/products/${productId}`,
      { headers: { Authorization: `Bearer ${token}` } })
  }
}
