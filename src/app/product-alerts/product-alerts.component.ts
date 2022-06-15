import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { product, products } from '../../models/products';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent implements OnInit {
  priceThreshold: number = 700;
  @Input() product!: product;
  @Output() notify = new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {
  }
}
