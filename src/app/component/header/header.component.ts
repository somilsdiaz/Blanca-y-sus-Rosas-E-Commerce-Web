import { Component, HostListener } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';  



@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatIconModule], 
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isScrolled = false;
  constructor() { }

  ngOnInit(): void {
  }
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 0;
  }
}
