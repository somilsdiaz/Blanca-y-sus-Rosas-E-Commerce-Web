import { Component, Input, Inject, ChangeDetectorRef } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-reponsive',
  standalone: true,
  imports: [],
  templateUrl: './menu-reponsive.component.html',
  styleUrls: ['./menu-reponsive.component.scss']
})
export class MenuReponsiveComponent {
  @Input() isMenuVisible: boolean = false;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private cdRef: ChangeDetectorRef,
    private router: Router
  ) {}

  ngOnChanges(): void {
    if (this.isMenuVisible) {
      // Bloquea el scroll al mostrar el menú
      this.document.body.style.overflow = 'hidden';
    } else {
      // Restaura el scroll al cerrar el menú
      this.document.body.style.overflow = '';
    }
  }

  closeMenu(): void {
    this.isMenuVisible = false;
    // Usamos ChangeDetectorRef para asegurarnos de que Angular detecte los cambios
    this.cdRef.detectChanges();
    this.document.body.style.overflow = '';  // Restauramos el scroll aquí
  }


  goToCatalogos() {
    this.router.navigate(['/catalogos']).then(() => {
      const catalogoSection = document.querySelector('#catalogos');
      if (catalogoSection) {
        catalogoSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  }
  
}
