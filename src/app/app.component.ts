import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from './component/header/header.component';
import {FeaturedProductsComponent} from "./component/featured-products/featured-products.component";
import {ProductCardComponent} from "./component/product-card/product-card.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FeaturedProductsComponent, ProductCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'blanca-y-sus-rosas';
}
