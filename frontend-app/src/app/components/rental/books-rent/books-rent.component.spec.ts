import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksRentComponent } from './books-rent.component';

describe('BooksRentComponent', () => {
  let component: BooksRentComponent;
  let fixture: ComponentFixture<BooksRentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BooksRentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksRentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
