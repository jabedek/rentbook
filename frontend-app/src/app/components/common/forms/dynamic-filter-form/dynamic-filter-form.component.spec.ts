import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicFilterFormComponent } from './dynamic-filter-form.component';

describe('DynamicFilterFormComponent', () => {
  let component: DynamicFilterFormComponent;
  let fixture: ComponentFixture<DynamicFilterFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicFilterFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicFilterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
