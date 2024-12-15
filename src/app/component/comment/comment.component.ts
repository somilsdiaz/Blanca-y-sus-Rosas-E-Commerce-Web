import { Component, Input  } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importación necesaria

@Component({
  selector: 'app-comment',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './comment.component.html',
  styleUrl: './comment.component.scss'
})
export class CommentComponent {
  @Input() name: string = '';
  @Input() imageUrl: string = '';
  @Input() description: string = '';
  @Input() date: string = '';
  @Input() stars: number = 0; 

  // Crea un array basado en el número de estrellas
  get filledStars() {
    return Array.from({ length: this.stars });
  }
}
