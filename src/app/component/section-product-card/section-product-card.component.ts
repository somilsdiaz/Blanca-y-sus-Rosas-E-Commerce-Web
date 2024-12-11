import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-section-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './section-product-card.component.html',
  styleUrls: ['./section-product-card.component.scss']
})
export class SectionProductCardComponent {
  @Input() productName: string = '';
  @Input() productDescription: string = '';
  @Input() productImage: string = '';
  @Input() productPrice: string = '';
  @Input() productDiscountPrice: string = '';
  @Input() productDiscountPercentage: string = '';
  @Input() badgeText: string = '';
  @Input() badgeColor: string = 'text-teal-600';
  @Input() badgeIcon: string = ''; // Ruta o contenido del ícono SVG

  sanitizedBadgeIcon!: SafeHtml; // Icono SVG sanitizado

  constructor(private sanitizer: DomSanitizer) {}

  ngOnChanges(): void {
    // Sanitizar contenido dinámico del ícono SVG
    if (this.badgeIcon) {
      this.sanitizedBadgeIcon = this.sanitizer.bypassSecurityTrustHtml(this.badgeIcon);
    }
  }
}
