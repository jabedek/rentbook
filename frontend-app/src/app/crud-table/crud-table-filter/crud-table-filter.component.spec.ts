import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudTableFilterComponent } from './crud-table-filter.component';

describe('CrudTableFilterComponent', () => {
  let component: CrudTableFilterComponent;
  let fixture: ComponentFixture<CrudTableFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudTableFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudTableFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
