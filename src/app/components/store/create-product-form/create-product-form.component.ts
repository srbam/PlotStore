  import { Component } from '@angular/core';
  import { Router } from '@angular/router';
  import { ProductService } from '../../../services/products.service';
  import { FileService } from '../../../services/files.service';
  import { firstValueFrom } from 'rxjs';

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
    ) { }

    file?: any;
    imageName: any

    handleImageInput(event: any) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        const base64String = reader.result as string;
        this.file = base64String;
      };
      reader.readAsDataURL(file);
    }

    async submitForm(form: any) {
        if (form.valid) {
          console.log('Formulário válido!');
          console.log('Dados:', form.value);
          
          try {
            if (this.file) {
              const response = await firstValueFrom(this.fileService.createFile(this.file));
              console.log('image uploaded', response.imageName);
              this.imageName = response.imageName;
              form.value.image = this.imageName;
            }
            
            const productResponse = await firstValueFrom(this.productService.createProduct(form.value));
            form.reset();
            this.redirectToStore();
          } catch (error) {
            console.error('Erro ao criar produto:', error);
          }
        } else {
          console.log('Formulário inválido!');
        }
    }

    redirectToStore(): void {
      this.router.navigateByUrl('/store');
    }
  }