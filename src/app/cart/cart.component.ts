import { Component, OnInit } from '@angular/core';
import { Product } from 'src/models/Product';
import { CartService } from 'src/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cart: Product[] = [];
  total: number = 0;
  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.getCart().subscribe((cart) => {
      this.cart = cart;
      this.total = cart.reduce(
        (acc, prod) => prod.price * (prod.quantity || 1),
        0
      );
    });
  }
}
