import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-page-list-update-delete-product',
  templateUrl: './page-list-update-delete-product.component.html',
  styleUrls: ['./page-list-update-delete-product.component.css']
})
export class PageListUpdateDeleteProductComponent implements OnInit {
  listProductsUpdateOrDelete!: Product[];
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProductsUpdate().subscribe((resp) => {
      console.log(resp);
      this.listProductsUpdateOrDelete = resp;
  })
  }
  onSubmitDelete(productId: string | undefined) {
    console.log(productId);
    if (productId) {
      this.productService.deleteProduct(productId).subscribe(
        (resp) => {
          console.log(resp);
          this.listProductsUpdateOrDelete = this.listProductsUpdateOrDelete.filter(product => product.id !== productId);
        }
      )
    }
  }
}
