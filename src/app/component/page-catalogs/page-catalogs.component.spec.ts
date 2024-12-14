import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCatalogsComponent } from './page-catalogs.component';

describe('PageCatalogsComponent', () => {
  let component: PageCatalogsComponent;
  let fixture: ComponentFixture<PageCatalogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageCatalogsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageCatalogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
