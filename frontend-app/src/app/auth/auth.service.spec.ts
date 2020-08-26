import { User } from 'src/app/shared/interfaces/user';
import { HttpClientModule } from '@angular/common/http';
import { environment } from './../../environments/environment';
import { reducers } from './../shared/store/reducers/index';
import { TestBed } from '@angular/core/testing';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
        StoreModule.forRoot(reducers),
        StoreDevtoolsModule.instrument({
          maxAge: 25,
          logOnly: environment.production,
        }),
      ],
    });
    service = TestBed.inject(AuthService);
  });
});
