import { MaterialModule } from './../../material/material.module';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import * as CONSTANTS from './../../shared/assets/constants';
import { CrudTableComponent } from './crud-table.component';

describe('CrudTableComponent', () => {
  let component: CrudTableComponent;
  let fixture: ComponentFixture<CrudTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CrudTableComponent],
      imports: [ReactiveFormsModule, HttpClientModule, MaterialModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudTableComponent);
    component = fixture.componentInstance;
    component.config = {
      name: 'users',
      newItemOnto: 'table-end',
      url: `http://localhost:3000/users`,
      modals: false,
      columns: CONSTANTS.table.USER_COLUMNS,
      defaulItemsPerPage: 5,
    };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
