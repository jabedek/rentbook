import { LanguagePipe } from './../../shared/pipes/language.pipe';
import { HttpClientModule } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { reducers } from './../../shared/store/reducers/index';
import { StoreModule } from '@ngrx/store';
import { RouterTestingModule } from '@angular/router/testing';
import { RegisterComponent } from './../register/register.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthModule } from './../auth.module';
import { UserCardComponent } from './../components/user-card/user-card.component';
import { FormVerticalComponent } from './../../shared/components/dynamic-forms/form-vertical/form-vertical.component';
import { SectionHeaderComponent } from './../../shared/components/section-header/section-header.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountComponent } from './account.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

describe('AccountComponent', () => {
  const routes: Routes = [
    {
      path: '',

      children: [
        { path: 'login', component: AccountComponent },
        { path: 'register', component: RegisterComponent },
      ],
    },
  ];

  let component: AccountComponent;
  let fixture: ComponentFixture<AccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AccountComponent,
        RegisterComponent,
        // SectionHeaderComponent,
        // FormVerticalComponent,
        // UserCardComponent,
        LanguagePipe,
      ],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        StoreModule.forRoot(reducers),
        StoreDevtoolsModule.instrument({
          maxAge: 25,
          logOnly: environment.production,
        }),

        RouterTestingModule.withRoutes(routes),
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
