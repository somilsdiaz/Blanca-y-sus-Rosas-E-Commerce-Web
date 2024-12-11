import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionProductCardComponent } from './section-product-card.component';

describe('SectionProductCardComponent', () => {
  let component: SectionProductCardComponent;
  let fixture: ComponentFixture<SectionProductCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionProductCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionProductCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
