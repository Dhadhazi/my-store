import { Component, OnInit } from '@angular/core';
import { Product } from 'src/models/Product';
import { ProductsService } from 'src/services/products.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { CartService } from 'src/services/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  productId: number = 0;
  productDetail: Product = {
    id: 1,
    name: 'Book',
    price: 9.99,
    url:
      'https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    description: '',
  };

  constructor(
    private productsService: ProductsService,
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.productsService.getAllProducts().subscribe((res) => {
      this.products = res;
      this.getParams();
    });
  }

  getParams(): void {
    this.route.queryParams.subscribe((params) => {
      this.productId = params['id'];
      this.getProduct();
    });
  }

  getProduct(): void {
    this.productDetail = this.products.filter(
      (product) => product.id == this.productId
    )[0];
  }

  addToCart(product: Product): void {
    console.log(product);
  }
}
