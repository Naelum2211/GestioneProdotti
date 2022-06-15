import { Component, OnInit } from '@angular/core';
import { product, products } from '../../models/products';
import { ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: product | undefined;
  dateofproductiondisplay: string | null = '';
  constructor(
    private route: ActivatedRoute,
    private datePipe: DatePipe
  ) { }
  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));
    if (isNaN(productIdFromRoute)) {
      console.log('productId FromRoute IS NOT a number');
    } else {
      console.log('productId FromRoute: ' + productIdFromRoute);
    }
    this.product = products.find(product => product.id === productIdFromRoute);
    if (this.product != undefined)
      this.dateofproductiondisplay = this.datePipe.transform(this.product?.dateofproduction, 'dd-MM-yyyy');
  }
}
