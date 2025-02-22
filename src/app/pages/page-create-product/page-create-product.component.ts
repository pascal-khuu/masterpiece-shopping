import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Brand } from 'src/app/models/brand';
import { Categorie } from 'src/app/models/categorie';
import { Fabric } from 'src/app/models/fabric';
import { Product } from 'src/app/models/product';
import { Size } from 'src/app/models/size';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-page-create-product',
  templateUrl: './page-create-product.component.html',
  styleUrls: ['./page-create-product.component.css']
})
export class PageCreateProductComponent implements OnInit {
  creerProduit!: FormGroup;
  public brandProduct!:Brand[];
  public categorieProduct!: Categorie[];
  public sizeProduct!: Size[];
  public fabricsProduct!:Fabric[];
  constructor(private fb: FormBuilder, private productService:ProductService, private Router: Router) { }

  ngOnInit(): void {
    this.creerProduit=this.fb.group({
      productName:['',[Validators.required]],
      pictureUrl: ['', [Validators.required]],
      price: [0, [Validators.required,Validators.min(0)]],
      numberStock: [0, [Validators.required, Validators.min(0)]],
      mainCategoryId: ['', [Validators.required]],
      mainBrandId: ['', [Validators.required]],
      mainSizeId: ['', [Validators.required]],
      mainFabricsId: ['', [Validators.required]]
    })
    this.productService.getBrands().subscribe((respbrand) => {
      console.log(respbrand);
      this.brandProduct = respbrand;
    })

    this.productService.getCategories().subscribe((respcategorie) => {
      console.log(respcategorie);
      this.categorieProduct = respcategorie;
    })

    this.productService.getSizes().subscribe((respsize) => {
      console.log(respsize);
      this.sizeProduct = respsize;
    })

    this.productService.getFabrics().subscribe((respfabrics) => {
      console.log(respfabrics);
      this.fabricsProduct = respfabrics;
    })
    
  }

  onSubmitProduct() {
    console.log(this.creerProduit.value);
    const newProduct = new Product(
      this.creerProduit.value.productName,
      this.creerProduit.value.pictureUrl,
      this.creerProduit.value.price,
      this.creerProduit.value.mainFabricsId,
      this.creerProduit.value.numberStock,
      this.creerProduit.value.mainCategoryId,
      this.creerProduit.value.mainBrandId,
      this.creerProduit.value.mainSizeId
    );
    console.log(newProduct);
    this.productService.createNewProduct(newProduct).subscribe(() => {
      console.log("Un produit a été crée.");
      this.Router.navigateByUrl("/list-product");
    })
}


}
