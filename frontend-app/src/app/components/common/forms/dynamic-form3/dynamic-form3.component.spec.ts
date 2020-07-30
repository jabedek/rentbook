import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicForm3Component } from './dynamic-form3.component';

describe('DynamicForm3Component', () => {
  let component: DynamicForm3Component;
  let fixture: ComponentFixture<DynamicForm3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicForm3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicForm3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
