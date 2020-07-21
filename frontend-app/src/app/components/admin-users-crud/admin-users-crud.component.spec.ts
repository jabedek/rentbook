import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUsersCrudComponent } from './admin-users-crud.component';

describe('AdminUsersCrudComponent', () => {
  let component: AdminUsersCrudComponent;
  let fixture: ComponentFixture<AdminUsersCrudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminUsersCrudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUsersCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
