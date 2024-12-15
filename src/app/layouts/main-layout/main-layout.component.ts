import { Component } from '@angular/core';
import {HeaderComponent} from "../../component/header/header.component";
import {FooterComponent} from "../../component/footer/footer.component";
import {RouterOutlet } from '@angular/router';

import {CatalogsComponent} from "../../component/catalogs/catalogs.component";
import {FeaturedProductsComponent} from "../../component/featured-products/featured-products.component";
import {ProductSectionComponent} from "../../component/product-section/product-section.component";

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [HeaderComponent,FooterComponent, RouterOutlet, CatalogsComponent, FeaturedProductsComponent, ProductSectionComponent],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss',
})
export class MainLayoutComponent {

}
