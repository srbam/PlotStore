import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { AppComponent } from './app.component';
import { StoreComponent } from './store/store.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    StoreComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: []
})
export class AppModule { }