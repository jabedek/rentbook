import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBooksCrudComponent } from './admin-books-crud.component';

describe('AdminBooksCrudComponent', () => {
  let component: AdminBooksCrudComponent;
  let fixture: ComponentFixture<AdminBooksCrudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminBooksCrudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminBooksCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
