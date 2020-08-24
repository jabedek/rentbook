import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudTablePaginatorComponent } from './crud-table-paginator.component';

describe('CrudTablePaginatorComponent', () => {
  let component: CrudTablePaginatorComponent;
  let fixture: ComponentFixture<CrudTablePaginatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudTablePaginatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudTablePaginatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
