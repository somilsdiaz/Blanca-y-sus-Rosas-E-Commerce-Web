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

}
