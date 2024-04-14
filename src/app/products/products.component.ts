import {Component, OnInit} from '@angular/core';
import {CommonModule, NgForOf} from "@angular/common";
import {HttpClient} from "@angular/common/http";
import {ProductService} from "../services/product.service";
import {Router} from "@angular/router";
import {FormsModule} from "@angular/forms";



@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    NgForOf,
    CommonModule, FormsModule
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements   OnInit{
  products :Array<any>=[];
  constructor(private productService:ProductService
            ) {
  }
  ngOnInit() {
    this.getProduct()




  }

getProduct(){
  this.productService.getProducts()
    .subscribe({
      next:data=> {
        this.products = data
      },
      error: err=>{
        console.log(err);
      }
    })

}
  handleCheckProduct(product: any) {
    this.productService.checkProduct(product)

      .subscribe({
      next :updatedProduct => {
        //product.checked = !product.checked;
        this.getProduct()
      }
    });
  }

}//json-server -w data/db.json
