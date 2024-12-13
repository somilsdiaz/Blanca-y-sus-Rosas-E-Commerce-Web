import { Component, HostListener } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';  
import { MenuReponsiveComponent } from "../menu-reponsive/menu-reponsive.component";


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatIconModule, MenuReponsiveComponent], 
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'], // Corregido: styleUrls en plural
})
export class HeaderComponent {
  isScrolled = false;
  isMenuVisible: boolean = false; // Propiedad para controlar la visibilidad del menú

  constructor() {}

  ngOnInit(): void {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 0;
  }

  toggleMenu() {
    this.isMenuVisible = !this.isMenuVisible; // Alterna la visibilidad del menú
  }
}
