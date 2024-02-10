import { Component } from '@angular/core';

@Component({
  selector: 'app-create-product-form',
  templateUrl: './create-product-form.component.html',
  styleUrl: './create-product-form.component.css'
})
export class CreateProductFormComponent {
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
    } else {
      console.log('Formulário inválido!');
    }
  }
}
