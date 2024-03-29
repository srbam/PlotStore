import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoreComponent } from './components/store/store.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent }from './components/about/about.component';
import { CreateProductFormComponent } from './components/store/create-product-form/create-product-form.component';
import { ProductPageComponent } from './components/store/product-page/product-page.component';


const storeRoutes: Routes = [
  { path: '', component: StoreComponent },
  { path: 'product/add', component: CreateProductFormComponent },
  { path: 'product/:id', component: ProductPageComponent }
];

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'store', children: storeRoutes },
  { path: 'about', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
