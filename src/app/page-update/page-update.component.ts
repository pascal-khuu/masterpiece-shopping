import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Brand } from '../models/brand';
import { Categorie } from '../models/categorie';
import { Product } from '../models/product';
import { Size } from '../models/size';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-page-update',
  templateUrl: './page-update.component.html',
  styleUrls: ['./page-update.component.css']
})
export class PageUpdateComponent implements OnInit {
  updateProduct!: FormGroup;
  public brandProduct!: Brand[];
  public categorieProduct!: Categorie[];
  public sizeProduct!: Size[];
  public listProducts!: Product[];
  constructor(private fb: FormBuilder, private productService: ProductService, private Router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe((param) => {
      console.log(param);
    this.productService.getProductById(param['id-product']).subscribe((product: Product) => {
      console.log(product);
      this.updateProduct = this.fb.group({
       
      productName: [product.productName, [Validators.required]],
      price: [product.price, [Validators.required]],
      fabrics: [product.fabrics, [Validators.required]],
      numberStock: [product.numberStock, [Validators.required]],
      mainCategoryId: [product.category, [Validators.required]],
      mainBrandId: [product.brand, [Validators.required]],
      mainSizeId: [product.size, [Validators.required]],
    })
    })
  })
}

onSubmitUpdateProduct(){

}
}
    // this.productService.getBrands().subscribe((respbrand) => {
    //   console.log(respbrand);
    //   this.brandProduct = respbrand;
    // })

    // this.productService.getCategories().subscribe((respcategorie) => {
    //   console.log(respcategorie);
    //   this.categorieProduct = respcategorie;
    // })

    // this.productService.getSizes().subscribe((respsize) => {
    //   console.log(respsize);
    //   this.sizeProduct = respsize;
    // })

    // this.productService.getProducts().subscribe((resp) => {
    //   console.log(resp);
    //   this.listProducts = resp;
    // })
  

  

