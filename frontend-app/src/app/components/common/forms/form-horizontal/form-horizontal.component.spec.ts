import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormHorizontalComponent } from './form-horizontal.component';

describe('FormHorizontalComponent', () => {
  let component: FormHorizontalComponent;
  let fixture: ComponentFixture<FormHorizontalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormHorizontalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormHorizontalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
