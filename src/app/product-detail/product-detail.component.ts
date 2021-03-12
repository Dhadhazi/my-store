import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/models/Product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  @Input() product: Product;
  @Output() addToCart: EventEmitter<any> = new EventEmitter();
  quantity: number = 1;

  constructor() {
    this.product = {
      id: 0,
      name: '',
      price: 0,
      url: '',
      description: '',
    };
  }

  ngOnInit(): void {}

  submitToCart(): void {
    this.product.quantity = Number(this.quantity);
    this.addToCart.emit(this.product);
  }
}
