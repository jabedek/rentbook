import { FormsModule, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudTableComponent } from './crud-table.component';

describe('CrudTableComponent', () => {
  let component: CrudTableComponent;
  let fixture: ComponentFixture<CrudTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CrudTableComponent],
      imports: [ReactiveFormsModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
