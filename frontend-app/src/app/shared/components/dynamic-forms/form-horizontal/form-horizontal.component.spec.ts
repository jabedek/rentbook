import { USER_COLUMNS } from './../../../assets/constants/table.constants';
import { ReactiveFormsModule } from '@angular/forms';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormHorizontalComponent } from './form-horizontal.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('FormHorizontalComponent', () => {
  let component: FormHorizontalComponent;
  let fixture: ComponentFixture<FormHorizontalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FormHorizontalComponent],
      imports: [ReactiveFormsModule, NoopAnimationsModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormHorizontalComponent);
    component = fixture.componentInstance;

    component.mode = 'create';
    component.displayDirection = 'row';
    component.appearance = 'standard';
    component.inputData = null;
    component.labels = { submit: 'Submit', reset: 'Erase' };
    component.columns = USER_COLUMNS;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
