import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../../../services/products.service';
import { FileService } from '../../../services/files.service';

@Component({
  selector: 'app-create-product-form',
  templateUrl: './create-product-form.component.html',
  styleUrl: './create-product-form.component.css'
})
export class CreateProductFormComponent {
  constructor(
    private router: Router,
    private productService: ProductService,
    private fileService: FileService
    ) {}

  file?: any;

  handleImageInput(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
        const base64String = reader.result as string;
        console.log('Imagem em base64:', base64String);
        this.file = base64String;
    };
    reader.readAsDataURL(file);
  }
  
  submitForm(form: any) {
    if (form.valid) {
      console.log('Formulário válido!');
      console.log('Dados:', form.value);

      if(this.file){
      console.log(this.file)
      this.fileService.createFile(this.file).subscribe({
        next: (response) => {
          console.log('image uploaded');
        },
        error: (error) => {
          console.error('Erro ao criar arquivo:', error);
        }
      });
      }

      this.productService.createProduct(form.value).subscribe({
        next: (response) => {
          form.reset();
          this.redirectToStore();
        },
        error: (error) => {
          console.error('Erro ao criar produto:', error);
        }
      });
    } else {
      console.log('Formulário inválido!');
    }
  }

  redirectToStore(): void {
    this.router.navigateByUrl('/store');
  }
}
