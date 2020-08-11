import { DynamicFilterFormComponent } from './components/common/forms/dynamic-filter-form/dynamic-filter-form.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './store2/counter.reducer';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/common/header/header.component';
import { BooksComponent } from './components/rental/books/books.component';
import { BooksRentComponent } from './components/rental/books-rent/books-rent.component';
import { BookItemComponent } from './components/rental/book-item/book-item.component';
import { AdminBooksComponent } from './components/admin/admin-books/admin-books.component';
import { HomeComponent } from './components/main/home/home.component';
import { SectionHeaderComponent } from './components/common/section-header/section-header.component';

import { LoginComponent } from './components/account/login/login.component';
import { RegisterComponent } from './components/account/register/register.component';
import { PasswordResetComponent } from './components/account/password-reset/password-reset.component';
import { CrudTableComponent } from './components/common/crud-table/crud-table.component';
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
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DynamicFormComponent } from './components/common/forms/dynamic-form/dynamic-form.component';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { LanguagePipe } from './pipes/language.pipe';
import { MyCounterComponent } from './my-counter/my-counter.component';

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    BooksRentComponent,
    BookItemComponent,
    AdminBooksComponent,
    AdminUsersComponent,
    HeaderComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    PasswordResetComponent,
    SectionHeaderComponent,
    CrudTableComponent,
    DynamicFormComponent,
    DynamicFilterFormComponent,
    LanguagePipe,
    MyCounterComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatIconModule,
    MatBadgeModule,
    MatCardModule,
    MatInputModule,
    MatToolbarModule,
    MatGridListModule,
    MatListModule,
    MatTableModule,
    MatStepperModule,
    MatMenuModule,
    MatChipsModule,
    MatDialogModule,
    MatRadioModule,
    MatCheckboxModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    StoreModule.forRoot({ count: counterReducer }),
  ],
  providers: [MatDatepickerModule],
  bootstrap: [AppComponent],
  entryComponents: [],
})
export class AppModule {}
