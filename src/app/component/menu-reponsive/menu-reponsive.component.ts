import { Component, Input, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-menu-reponsive',
  standalone: true,
  imports: [],
  templateUrl: './menu-reponsive.component.html',
  styleUrls: ['./menu-reponsive.component.scss']
})
export class MenuReponsiveComponent {
  @Input() isMenuVisible: boolean = false;

  constructor(@Inject(DOCUMENT) private document: Document) {}

  ngOnChanges(): void {
    if (this.isMenuVisible) {
      this.document.body.style.overflow = 'hidden'; // Bloquear scroll
    } else {
      this.document.body.style.overflow = ''; // Restaurar scroll
    }
  }

  closeMenu(): void {
    this.isMenuVisible = false;
  }
}
