import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-menu-reponsive',
  standalone: true,
  imports: [],
  templateUrl: './menu-reponsive.component.html',
  styleUrls: ['./menu-reponsive.component.scss'] 
})
export class MenuReponsiveComponent {
  @Input() isMenuVisible: boolean = false; // Define el input para la visibilidad
    // Lógica para cerrar el menú
    closeMenu(): void {
      this.isMenuVisible = false;
    }
}
