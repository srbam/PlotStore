import { Component } from '@angular/core';
import { Product } from '../about/models/product.model';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrl: './store.component.scss'
})

export class StoreComponent {
  products: Product[] = [
    { name: 'Product 1', price: 10 },
    { name: 'Product 2', price: 20 },
    { name: 'Product 3', price: 30 },
    { name: 'Product 4', price: 40 },
    { name: 'Product 5', price: 50 },
    { name: 'Product 6', price: 60 },
    { name: 'Product 7', price: 70 },
    { name: 'Product 8', price: 80 },
    { name: 'Product 9', price: 90 },
    { name: 'Product 10', price: 100 }
  ];
}
