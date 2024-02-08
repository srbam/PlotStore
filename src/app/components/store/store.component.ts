import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrl: './store.component.scss'
})

export class StoreComponent{
  constructor(private router: Router) {}

  products: Product[] = [
    { name: 'Product 1', price: 10, image: '' },
    { name: 'Product 2', price: 20, image: '' },
    { name: 'Product 3', price: 30, image: '' },
    { name: 'Product 4', price: 40, image: '' },
    { name: 'Product 5', price: 50, image: '' },
    { name: 'Product 6', price: 60, image: '' },
    { name: 'Product 7', price: 70, image: '' },
    { name: 'Product 8', price: 80, image: '' },
    { name: 'Product 9', price: 90, image: '' },
    { name: 'Product 10', price: 100, image: '' }
  ];

  redirectToAbout(): void {
    this.router.navigateByUrl('/product/add');
  }
}
