import { RouterModule, Routes } from '@angular/router';
import { StoreComponent } from './store/store.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent }from './about/about.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'store', component: StoreComponent },
    { path: 'about', component: AboutComponent }
];

export const AppRoutingModule = RouterModule.forRoot(routes);