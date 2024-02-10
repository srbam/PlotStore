import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { StoreComponent } from './components/store/store.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent }from './components/about/about.component';
import { CreateProductFormComponent } from './components/store/create-product-form/create-product-form.component';


@NgModule({
  declarations: [
    AppComponent,
    StoreComponent,
    HomeComponent,
    AboutComponent,
    CreateProductFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
