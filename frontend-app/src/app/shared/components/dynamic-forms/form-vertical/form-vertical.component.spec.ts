import { USER_COLUMNS } from './../../../assets/constants/table.constants';
import { ReactiveFormsModule } from '@angular/forms';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormVerticalComponent } from './form-vertical.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { Pipe } from '@angular/core';

export function mockPipe(options: Pipe): Pipe {
  const metadata: Pipe = {
    name: options.name,
  };

  return <any>Pipe(metadata)(class MockPipe {});
}

describe('FormVerticalComponent', () => {
  let component: FormVerticalComponent;
  let fixture: ComponentFixture<FormVerticalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FormVerticalComponent, mockPipe({ name: 'language' })],
      imports: [ReactiveFormsModule, NoopAnimationsModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormVerticalComponent);
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
