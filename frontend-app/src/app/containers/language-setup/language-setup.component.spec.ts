import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguageSetupComponent } from './language-setup.component';

describe('LanguageSetupComponent', () => {
  let component: LanguageSetupComponent;
  let fixture: ComponentFixture<LanguageSetupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LanguageSetupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LanguageSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
