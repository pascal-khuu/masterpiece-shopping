import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Brand } from 'src/app/models/brand';
import { Categorie } from 'src/app/models/categorie';
import { Fabric } from 'src/app/models/fabric';
import { Product } from 'src/app/models/product';
import { Size } from 'src/app/models/size';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-page-update-product',
  templateUrl: './page-update-product.component.html',
  styleUrls: ['./page-update-product.component.css']
})
export class PageUpdateProductComponent implements OnInit {
  updateProduct!: FormGroup;
  public brandProduct!: Brand[];
  public categorieProduct!: Categorie[];
  public sizeProduct!: Size[];
  public fabricsProduct!: Fabric[];
  constructor(private fb: FormBuilder, private productService: ProductService, private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe((param) => {
      console.log(param);
      this.productService.getProductById(param['id-product']).subscribe((product: Product) => {
        console.log(product);
        this.updateProduct = this.fb.group({
          productName: [product.productName, [Validators.required]],
          mainBrandId: [Number(product.brand.id), [Validators.required]],
          mainSizeId: [Number(product.size.id), [Validators.required]],
          mainFabricId: [Number(product.fabric.id), [Validators.required]],
          mainCategoryId: [Number(product.category.id), [Validators.required]],
          price: [product.price, [Validators.required]],
          numberStock: [product.numberStock, [Validators.required]],
          id: [product.id]
        })
      })
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

  onSubmitUpdateProduct() {
    const productToUpdate = this.updateProduct.value;

    this.productService.updateProduct(productToUpdate).subscribe((resp) => {
      console.log(resp);
      this.router.navigateByUrl('/list-product');
    })
  }
  

}
