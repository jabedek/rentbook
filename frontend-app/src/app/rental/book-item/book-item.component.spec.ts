import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookItemComponent } from './book-item.component';

describe('BookItemComponent', () => {
  let component: BookItemComponent;

  let fixture: ComponentFixture<BookItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BookItemComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookItemComponent);
    component = fixture.componentInstance;
    component.book = {
      id: '000',
      title: 'title',
      author: 'author',
      genre: 'genre',
      dateAdded: '2000-10-10',
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
