import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importa CommonModule
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-featured-products',
  standalone: true,
  imports: [CommonModule, ProductCardComponent], 
  templateUrl: './featured-products.component.html',
  styleUrls: ['./featured-products.component.scss'] 
})
export class FeaturedProductsComponent {}
