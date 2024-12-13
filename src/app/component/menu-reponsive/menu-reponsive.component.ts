import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-menu-reponsive',
  standalone: true,
  imports: [],
  templateUrl: './menu-reponsive.component.html',
  styleUrls: ['./menu-reponsive.component.scss'] // Corregido: "styleUrls" en plural
})
export class MenuReponsiveComponent {
  @Input() isMenuVisible: boolean = false; // Define el input para la visibilidad
}
