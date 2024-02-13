import { Component } from '@angular/core';
import { ProductService } from '../../../services/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-product-form',
  templateUrl: './create-product-form.component.html',
  styleUrl: './create-product-form.component.css'
})
export class CreateProductFormComponent {
  constructor(
    private router: Router,
    private productService: ProductService
    ) {}

  handleImageInput(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      const base64String = reader.result as string;
      console.log('Imagem em base64:', base64String);
    };
    reader.readAsDataURL(file);
  }
  
  submitForm(form: any) {
    if (form.valid) {
      console.log('Formulário válido!');
      console.log('Dados:', form.value);

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
