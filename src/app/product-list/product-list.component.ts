import { Component, OnInit } from '@angular/core';
import { products } from 'src/models/products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
    productsList = products;

    constructor(){}

    ngOnInit(): void {}
  
     share(prodName: string) {
      window.alert('The product' + prodName + 'has been shared!');
    }
    
    onNotify(priceProd: number){
      /* const priceDisplay = priceProd | currency; */
      window.alert('The product price is $' + priceProd)
    }
  }
