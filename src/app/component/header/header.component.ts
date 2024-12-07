import { Component, HostListener } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';  // Importa el módulo necesario


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatIconModule],  // Agrega MatIconModule aquí
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isScrolled = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 0; // Cambia el estado si el usuario se desplaza
  }
}
