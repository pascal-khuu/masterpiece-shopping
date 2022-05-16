import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-page-create-product',
  templateUrl: './page-create-product.component.html',
  styleUrls: ['./page-create-product.component.css']
})
export class PageCreateProductComponent implements OnInit {
  creerProduit!: FormGroup;
  public listProducts!: Product[];
  constructor(private fb: FormBuilder, private productService:ProductService) { }

  ngOnInit(): void {
    this.creerProduit=this.fb.group({
      productName:['',[Validators.required]],
      price: [, [Validators.required]],
      fabrics: ['', [Validators.required]],
      numberStock: [, [Validators.required]],
      mainCategoryId: [, [Validators.required]],
      mainBrandId: [, [Validators.required]],
      mainSizeId: [, [Validators.required]],
    })

    this.productService.getProducts().subscribe((resp) => {
      console.log(resp);
      this.listProducts = resp;
    })
    
  }

  onSubmitProduct() {
    console.log(this.creerProduit.value);
    const newProduct = new Product(
      this.creerProduit.value.productName,
      this.creerProduit.value.price,
      this.creerProduit.value.fabrics,
      this.creerProduit.value.numberStock,
      this.creerProduit.value.mainCategoryId,
      this.creerProduit.value.mainBrandId,
      this.creerProduit.value.mainSizeId
    );
    console.log(newProduct);
    this.productService.createNewProduct(newProduct).subscribe(() => {
      console.log("un produit a été crée");
    })
}


}
