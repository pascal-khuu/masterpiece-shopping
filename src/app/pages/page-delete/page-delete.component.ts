import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-page-delete',
  templateUrl: './page-delete.component.html',
  styleUrls: ['./page-delete.component.css']
})
export class PageDeleteComponent implements OnInit {
  listProductDelete!:Product[];
  listProducts!:Product[];
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProductsUpdate().subscribe((resp) => {
      console.log(resp);
      this.listProductDelete = resp;
    })
    this.productService.getProducts().subscribe((resp)=>{
      console.log(resp);
      this.listProducts = resp;
    })

  }
  onSubmitDelete(productId: string | undefined) {
    console.log(productId);
    if (productId) {
      this.productService.deleteProduct(productId).subscribe(
        (resp)=> {
          console.log(resp);
          this.listProductDelete = this.listProductDelete.filter(product => product.id !== productId);
        }
      )
      }    
  }
}
