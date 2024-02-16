import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';
import { Router } from '@angular/router';
import { ProductService } from '../../services/products.service'

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrl: './store.component.scss'
})

export class StoreComponent implements OnInit {
  constructor(
    private router: Router,
    private productService: ProductService
  ) { }
  products: Product[] = [];

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.productService.getProducts()
      .subscribe(products => {
        this.products = products;
      });
  }

  redirectToCreateProduct(): void {
    this.router.navigateByUrl('/product/add');
  }

  redirectToProductPage(productId: string) {
    if (productId) {
      this.router.navigate(['/product', productId]);
    }
  }
}
