import { LanguagePipe } from './../../../shared/pipes/language.pipe';
import { SharedModule } from './../../../shared/shared.module';
import { MaterialModule } from './../../../material/material.module';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminNavigationComponent } from './admin-navigation.component';

describe('AdminNavigationComponent', () => {
  let component: AdminNavigationComponent;
  let fixture: ComponentFixture<AdminNavigationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AdminNavigationComponent, LanguagePipe],
      // imports: [MaterialModule],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
