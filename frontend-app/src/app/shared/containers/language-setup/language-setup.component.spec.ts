import { reducers } from './../../store/reducers/index';
import { environment } from './../../../../environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { LogoComponent } from './../../components/logo/logo.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LanguageSetupComponent } from './language-setup.component';
import { StoreModule } from '@ngrx/store';

describe('LanguageSetupComponent', () => {
  let component: LanguageSetupComponent;
  let fixture: ComponentFixture<LanguageSetupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LanguageSetupComponent, LogoComponent],
      imports: [
        StoreModule.forRoot(reducers),
        StoreDevtoolsModule.instrument({
          maxAge: 25,
          logOnly: environment.production,
        }),
      ],
    }).compileComponents();
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
