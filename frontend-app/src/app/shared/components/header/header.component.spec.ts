import { HttpClientModule } from '@angular/common/http';
import { environment } from './../../../../environments/environment';
import { reducers } from './../../store/reducers/index';
import { StoreModule } from '@ngrx/store';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      imports: [
        StoreModule.forRoot(reducers),
        HttpClientModule,
        StoreDevtoolsModule.instrument({
          maxAge: 25,
          logOnly: environment.production,
        }),
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
