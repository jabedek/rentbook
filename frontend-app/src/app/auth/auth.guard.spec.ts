import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { reducers } from './../shared/store/reducers/index';
import { StoreModule } from '@ngrx/store';
import { TestBed } from '@angular/core/testing';

import { AuthGuard } from './auth.guard';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

describe('AuthGuard', () => {
  let guard: AuthGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        RouterTestingModule,
        StoreModule.forRoot(reducers),
        StoreDevtoolsModule.instrument({
          maxAge: 25,
          logOnly: environment.production,
        }),
      ],
    });
    guard = TestBed.inject(AuthGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
