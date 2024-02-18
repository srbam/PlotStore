import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';
import { Router } from '@angular/router';
import { ProductService } from '../../services/products.service'
import { FileService } from '../../services/files.service';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrl: './store.component.scss'
})

export class StoreComponent implements OnInit {
  constructor(
    private router: Router,
    private productService: ProductService,
    private fileService: FileService
  ) { }
  products: Product[] = [];
  imgIsLoaded: boolean = false;
  async ngOnInit(){
    this.getProducts();
  }

  getProducts(): void {
    this.productService.getProducts()
      .subscribe(products => {
        this.products = products;
        products.map((product) => {
          this.fileService.getFileByName(product.image).subscribe((response: any) => {
            product.image = response.imageURL;
            this.imgIsLoaded = true;
          })
        })
      });
  }

  redirectToCreateProduct(): void {
    this.router.navigateByUrl('/store/product/add');
  }

  redirectToProductPage(productId: string) {
    if (productId) {
      this.router.navigate(['/store/product/', productId]);
    }
  }
}
