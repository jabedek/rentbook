import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { MomentDateModule } from '@angular/material-moment-adapter';
// ## My Modules
import { HomeModule } from './home/home.module';
import { CrudTableModule } from './crud-table/crud-table.module';
import { RentalModule } from './rental/rental.module';
import { MaterialModule } from './material/material.module';
import { AuthModule } from './auth/auth.module';
import { CommonsModule } from './commons/commons.module';
import { AdminModule } from './admin/admin.module';
// ## other imports
import { AppComponent } from './app.component';
import { MAT_DATE_FORMATS } from '@angular/material/core';
import { MY_FORMATS } from './assets/constants/common.constants';
import { environment } from '../environments/environment';
import { reducers } from './store/reducers';
import { DateAdapter, MAT_DATE_LOCALE } from '@angular/material/core';

import {
  MomentDateAdapter,
  MAT_MOMENT_DATE_ADAPTER_OPTIONS,
} from '@angular/material-moment-adapter';

@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    AppRoutingModule,
    RentalModule,
    CommonsModule,
    MomentDateModule,
    HomeModule,
    MaterialModule,
    AdminModule,
    AuthModule,
    CrudTableModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
  ],
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
    },

    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
  ],
  bootstrap: [AppComponent],
  entryComponents: [],
  exports: [],
})
export class AppModule {}
