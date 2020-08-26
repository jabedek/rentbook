import { MaterialModule } from './../../material/material.module';
import { MatSelectModule } from '@angular/material/select';
import { USER_COLUMNS } from './../../shared/assets/constants/table.constants';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudTableFilterComponent } from './crud-table-filter.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('CrudTableFilterComponent', () => {
  let component: CrudTableFilterComponent;
  let fixture: ComponentFixture<CrudTableFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CrudTableFilterComponent],
      imports: [ReactiveFormsModule, MaterialModule, NoopAnimationsModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudTableFilterComponent);
    component = fixture.componentInstance;
    component.columns = USER_COLUMNS;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
