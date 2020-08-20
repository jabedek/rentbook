import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudFilterFormComponent } from './crud-filter-form.component';

describe('CrudFilterFormComponent', () => {
  let component: CrudFilterFormComponent;
  let fixture: ComponentFixture<CrudFilterFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudFilterFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudFilterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
