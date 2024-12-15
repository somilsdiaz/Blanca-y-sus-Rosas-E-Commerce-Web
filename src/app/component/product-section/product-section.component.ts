import { Component } from '@angular/core';
import { SectionProductCardComponent } from "../section-product-card/section-product-card.component";
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-product-section',
  standalone: true,
  imports: [SectionProductCardComponent, CommonModule],
  templateUrl: './product-section.component.html',
  styleUrl: './product-section.component.scss'
})
export class ProductSectionComponent {

}
