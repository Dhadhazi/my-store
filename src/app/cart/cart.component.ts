import { Component, OnInit } from '@angular/core';
import { Product } from 'src/models/Product';
import { User } from 'src/models/User';
import { CartService } from 'src/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cart: Product[] = [];
  total: number = 0;
  user: User;
  constructor(private cartService: CartService) {
    this.user = {
      fullname: '',
      address: '',
      ccnumber: '',
    };
  }

  ngOnInit(): void {
    this.cartService.getCart().subscribe((cart) => {
      this.cart = cart;
      this.total = cart.reduce(
        (acc, prod) => prod.price * (prod.quantity || 1),
        0
      );
    });
  }

  onSubmit() {
    console.log(this.user);
  }
}
