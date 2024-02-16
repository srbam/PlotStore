import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/products.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.css'
})
export class ProductPageComponent implements OnInit{
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private productService: ProductService
    ) {}

  async ngOnInit(){
    this.route.params.subscribe(params => {
      const productId = params['id'];
      this.productService.getProductById(productId).subscribe({
        next: product => {
        },
        error: error => {
          this.redirectToStore();
        }
      });
    });
  }

  redirectToStore(): void {
    this.router.navigateByUrl('/store');
  }
}
