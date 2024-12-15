import { Component } from '@angular/core';
import { MainLayoutComponent } from '../../layouts/main-layout/main-layout.component';
import { CommentComponent } from '../../component/comment/comment.component';

@Component({
  selector: 'app-page-catalogs',
  standalone: true,
  imports: [MainLayoutComponent, CommentComponent],
  templateUrl: './page-catalogs.component.html',
  styleUrl: './page-catalogs.component.scss',
})
export class PageCatalogsComponent {
  toggleFaq(button: HTMLElement): void {
    // Buscar el contenedor del contenido oculto (el siguiente hermano del botón)
    const content = button.nextElementSibling;
    if (content) {
      // Alternar la clase 'hidden' en el contenido
      content.classList.toggle('hidden');
  
      // Alternar la rotación del ícono (la flecha)
      const icon = button.querySelector('svg');
      if (icon) {
        icon.classList.toggle('rotate-180');
      }
    }
  }
}  