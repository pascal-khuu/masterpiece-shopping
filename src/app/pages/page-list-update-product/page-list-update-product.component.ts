import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-page-list-update-product',
  templateUrl: './page-list-update-product.component.html',
  styleUrls: ['./page-list-update-product.component.css']
})
export class PageListUpdateProductComponent implements OnInit {
  listProductsUpdate!: Product[];
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProductsUpdate().subscribe((resp) => {
      console.log(resp);
      this.listProductsUpdate = resp;
    })
  }

}
