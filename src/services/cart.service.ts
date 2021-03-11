import { Injectable } from '@angular/core';
import { Product } from 'src/models/Product';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart: Product[] = [];

  constructor() {}

  addToCart(product: Product) {
    this.cart.push();
  }

  getCart(): Product[] {
    return this.cart;
  }
}
