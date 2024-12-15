import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PageCatalogsComponent } from './pages/page-catalogs/page-catalogs.component';

export const routes: Routes = [
  { path: '', component: HomeComponent }, // Página principal
  { path: 'catalogos', component: PageCatalogsComponent }, // Página de catálogos
];
