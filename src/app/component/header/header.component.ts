import { Component, HostListener } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';  
import { MenuReponsiveComponent } from "../menu-reponsive/menu-reponsive.component";
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatIconModule, MenuReponsiveComponent], 
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'], 
})
export class HeaderComponent {
  isScrolled = false;
  isMenuVisible: boolean = false; // Propiedad para controlar la visibilidad del menú

  constructor(private router: Router) {}

  ngOnInit(): void {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 0;
  }

  toggleMenu() {
    this.isMenuVisible = !this.isMenuVisible; // Alterna la visibilidad del menú
  }

  goToCatalogos() {
    this.router.navigate(['/catalogos']).then(() => {
      const catalogoSection = document.querySelector('#catalogos');
      if (catalogoSection) {
        catalogoSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  }

  goToHome() {
    this.router.navigate(['/']).then(() => {
      const headerSection = document.querySelector('#header');
      if (headerSection) {
        headerSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  }
}
