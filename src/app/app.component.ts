import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from './component/header/header.component';
import {FeaturedProductsComponent} from "./component/featured-products/featured-products.component";
import {ProductCardComponent} from "./component/product-card/product-card.component";
import {ProductSectionComponent} from "./component/product-section/product-section.component";
import {SectionProductCardComponent} from "./component/section-product-card/section-product-card.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FeaturedProductsComponent, ProductCardComponent, ProductSectionComponent, SectionProductCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'blanca-y-sus-rosas';
}
