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

  public product: any;
  public fileURL: any;
  public productId: string = '';

  redirectToStore(): void {
    this.router.navigateByUrl('/store');
  }

  async ngOnInit(){
    this.route.params.subscribe(async params => {
      this.productId = params['id'];
      try{
        await this.productService.getProductById(this.productId).subscribe(async product => {
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

  async deleteProduct(id: string){
    try{
      this.productService.deleteProductById(id).subscribe({
        next: () => {
          console.log("Produto deletado com sucesso");
          this.redirectToStore();
        },
        error: (error) => {
          console.log("Erro ao deletar produto", error);
        }
      });
    } catch (error){
      console.log("Erro ao deletar produto");
    }
  }
}
