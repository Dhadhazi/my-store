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
  showConfirmation: boolean = false;

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
      this.countTotal();
    });
  }

  countTotal() {
    this.cart = this.cart.filter((prod) => Number(prod.quantity) !== 0);
    this.total = this.cart.reduce(
      (acc, prod) => (acc += prod.price * (prod.quantity || 1)),
      0
    );
    this.total = Math.round(this.total * 100) / 100;
  }

  onSubmit() {}

  disableShowConfirmation() {
    this.showConfirmation = false;
  }
}
