import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBooksAddComponent } from './admin-books-add.component';

describe('AdminBooksAddComponent', () => {
  let component: AdminBooksAddComponent;
  let fixture: ComponentFixture<AdminBooksAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminBooksAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminBooksAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
