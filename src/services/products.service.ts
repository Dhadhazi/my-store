import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from 'src/models/Product';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private jsonURL = 'assets/data.json';

  constructor(private http: HttpClient) {}

  getData(): Observable<Product[]> {
    return this.http.get<Product[]>(this.jsonURL);
  }
}
