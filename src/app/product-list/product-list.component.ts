import { Component, OnInit } from '@angular/core';
import { Product } from 'src/models/Product';
import { ProductsService } from 'src/services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.productsService.getData().subscribe((res) => {
      this.products = res;
    });
  }
}
