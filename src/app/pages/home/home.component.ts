import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {MainLayoutComponent} from "../../layouts/main-layout/main-layout.component";
import { FeaturedProductsComponent } from '../../component/featured-products/featured-products.component';
import { CatalogsComponent } from '../../component/catalogs/catalogs.component';
import { ProductSectionComponent } from '../../component/product-section/product-section.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MainLayoutComponent, FeaturedProductsComponent, CatalogsComponent, ProductSectionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',

})
export class HomeComponent {

}
