import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/products.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { FileService } from '../../../services/files.service';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.css'
})
export class ProductPageComponent implements OnInit{
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private productService: ProductService,
    private fileService: FileService
    ) {}

  product: any;
  fileURL: any;

  async ngOnInit(){
    this.route.params.subscribe(async params => {
      const productId = params['id'];
      try{
        await this.productService.getProductById(productId).subscribe(async product => {
          this.product = product;
          await this.fileService.getFileByName(this.product.image).subscribe((response: any) => {
            this.fileURL = response?.imageURL;
          });
          
        });
      } catch(error){
        this.redirectToStore();
      }
    });
  }

  redirectToStore(): void {
    this.router.navigateByUrl('/store');
  }
}
