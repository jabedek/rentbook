import { CrudTableModule } from './crud-table/crud-table.module';
import { RentalModule } from './rental/rental.module';
import { MaterialModule } from './material/material.module';
import { AuthModule } from './auth/auth.module';
import { CommonsModule } from './commons/commons.module';
// import { HeaderModule } from './header/header.module';
// import { HeaderComponent } from './header/header/header.component';

import { LoginComponent } from './auth/login/login.component';
import { AdminModule } from './admin/admin.module';
import { MY_FORMATS } from './assets/constants/common.constants';
// import { DynamicFilterFormComponent } from './components/common/forms/dynamic-filter-form/dynamic-filter-form.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';

import { StoreModule, ActionReducerMap } from '@ngrx/store';

import { AppComponent } from './app.component';
// import { HeaderComponent } from './components/common/header/header.component';
// HeaderComponent
import { AdminBooksComponent } from './components/admin/admin-books/admin-books.component';
import { HomeComponent } from './components/main/home/home.component';
// import { SectionHeaderComponent } from './components/common/section-header/section-header.component';

// import { LoginComponent } from './components/account/login/login.component';
import { RegisterComponent } from './components/account/register/register.component';
// import { CrudTableComponent } from './components/common/crud-table/crud-table.component';
import { AdminUsersComponent } from './components/admin/admin-users/admin-users.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/Toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/Input';
import { MatBadgeModule } from '@angular/material/badge';
import { MatMenuModule } from '@angular/material/Menu';
import { MatCardModule } from '@angular/material/Card';
import { MatChipsModule } from '@angular/material/chips';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/Table';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatStepperModule } from '@angular/material/stepper';
import { MatDialogModule } from '@angular/material/dialog';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRippleModule } from '@angular/material/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import {
  MatNativeDateModule,
  DateAdapter,
  MAT_DATE_LOCALE,
} from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
// import { LanguagePipe } from './pipes/language.pipe';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MomentDateModule } from '@angular/material-moment-adapter';
import { MAT_DATE_FORMATS } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import {
  MomentDateAdapter,
  MAT_MOMENT_DATE_ADAPTER_OPTIONS,
} from '@angular/material-moment-adapter';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { reducers } from './store/reducers';
// import { LanguageSetupComponent } from './containers/language-setup/language-setup.component';
// import { LogoComponent } from './components/common/logo/logo.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    // BookItemComponent,
    AdminBooksComponent,
    AdminUsersComponent,

    HomeComponent,
    RegisterComponent,
    // LoginComponent,
    // SectionHeaderComponent,
    // CrudTableComponent,
    // TablePaginatorComponent,
    // CrudFilterFormComponent,
    // LanguagePipe,
    // DialogComponent,
    // LanguageSetupComponent,
    // LogoComponent,
    // FormHorizontalComponent,
    // FormVerticalComponent,
    // LanguageComponent,
  ],
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

    // MatRippleModule,
    // MatDialogModule,
    // MatButtonModule,
    // MatTooltipModule,
    // MatButtonToggleModule,
    // MatIconModule,
    // MatBadgeModule,
    // MatCardModule,
    // MatInputModule,
    // MatToolbarModule,
    // MatGridListModule,
    // MatListModule,
    // MatTableModule,
    // MatStepperModule,
    // MatMenuModule,
    // MatChipsModule,
    // MatDialogModule,
    // MatRadioModule,
    // MatCheckboxModule,
    // MatDialogModule,
    // MatDatepickerModule,
    // MatNativeDateModule,
    // MatSelectModule,
    // MatPaginatorModule,
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
