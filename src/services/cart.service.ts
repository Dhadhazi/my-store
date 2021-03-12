import { Injectable } from '@angular/core';
import { Product } from 'src/models/Product';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart: Product[] = [];

  constructor() {}

  addToCart(product: Product) {
    this.cart.push(product);
  }

  emptyCart() {
    this.cart = [];
  }

  getCart(): Observable<Product[]> {
    const cart = of(this.cart);
    return cart;
  }
}
