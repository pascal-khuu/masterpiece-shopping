import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-page-list-product',
  templateUrl: './page-list-product.component.html',
  styleUrls: ['./page-list-product.component.css']
})
export class PageListProductComponent implements OnInit {
  public listProducts!: Product[];
  constructor( private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe((resp) => {
      console.log(resp);
      this.listProducts = resp;
  })
  }
}
