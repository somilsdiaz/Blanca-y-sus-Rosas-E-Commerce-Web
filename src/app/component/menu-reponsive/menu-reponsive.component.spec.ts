import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MenuReponsiveComponent } from './menu-reponsive.component';
import { DOCUMENT } from '@angular/common';
import { ChangeDetectorRef } from '@angular/core';

describe('MenuReponsiveComponent', () => {
  let component: MenuReponsiveComponent;
  let fixture: ComponentFixture<MenuReponsiveComponent>;
  let mockDocument: Document;
  let mockChangeDetectorRef: ChangeDetectorRef;

  beforeEach(async () => {
    mockDocument = {
      body: {
        style: {
          overflow: ''
        }
      }
    } as Document;

    // Mock ChangeDetectorRef
    mockChangeDetectorRef = {
      detectChanges: jest.fn()
    } as unknown as ChangeDetectorRef;

    await TestBed.configureTestingModule({
      imports: [MenuReponsiveComponent],
      providers: [
        { provide: DOCUMENT, useValue: mockDocument },
        { provide: ChangeDetectorRef, useValue: mockChangeDetectorRef }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(MenuReponsiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should disable scroll when menu is visible', () => {
    component.isMenuVisible = true;
    component.ngOnChanges();
    expect(mockDocument.body.style.overflow).toBe('hidden');
  });

  it('should enable scroll when menu is hidden', () => {
    component.isMenuVisible = false;
    component.ngOnChanges();
    expect(mockDocument.body.style.overflow).toBe('');
  });

  it('should restore scroll when closing the menu', () => {
    component.isMenuVisible = true;
    component.closeMenu();
    fixture.detectChanges();
    expect(mockDocument.body.style.overflow).toBe('');
  });
});
