import { Component, Input  } from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importación necesaria
@Component({
  selector: 'app-comment',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './comment.component.html',
  styleUrl: './comment.component.scss'
})
export class CommentComponent {
  comment = {
    name: 'María Rodríguez',
    imageUrl: 'https://i.pravatar.cc/150?img=1',
    description: 'Los productos de Blanca y Rosas son increíbles. La calidad es excelente y el servicio al cliente es inmejorable.',
    date: '15 de mayo, 2023',
    stars: 5, 
  };
  // Crea un array basado en el número de estrellas
  get filledStars() {
    return Array.from({ length: this.comment.stars });
  }
}
