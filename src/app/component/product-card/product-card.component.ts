import { Component, Input  } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importa CommonModule

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {
  @Input() imageSrc: string = '';
  @Input() badgeText: string = '';
  @Input() productName: string = '';
  @Input() oldPrice: string = '';
  @Input() newPrice: string = '';
}
