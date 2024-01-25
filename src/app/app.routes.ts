import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PricesPageComponent } from './pages/prices-page/prices-page.component';

// Routes and its actionns (modules)
export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'Home', component: HomeComponent },
  { path: 'Exemples', component: HomeComponent },
  { path: 'Documentation', component: HomeComponent },
  { path: 'Download-Library', component: HomeComponent },
  { path: 'Prices', component: PricesPageComponent }
];
