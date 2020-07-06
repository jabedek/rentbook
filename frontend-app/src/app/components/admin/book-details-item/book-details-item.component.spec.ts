import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookDetailsItemComponent } from './book-details-item.component';

describe('BookDetailsItemComponent', () => {
  let component: BookDetailsItemComponent;
  let fixture: ComponentFixture<BookDetailsItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookDetailsItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookDetailsItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
