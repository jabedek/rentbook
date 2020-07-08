import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { AppRoutingModule } from './app-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/common/header/header.component';
import { BooksComponent } from './components/rental/books/books.component';
import { BooksRentComponent } from './components/rental/books-rent/books-rent.component';
import { BookItemComponent } from './components/rental/book-item/book-item.component';
import { AdminBooksComponent } from './components/admin/admin-books/admin-books.component';
import { AdminBooksAddComponent } from './components/admin/admin-books-add/admin-books-add.component';
import { LandingComponent } from './components/main/landing/landing.component';
import { AuthModule } from './auth/auth.module';
import { LoginComponent } from './components/account/login/login.component';
import { RegisterComponent } from './components/account/register/register.component';
import { PasswordResetComponent } from './components/account/password-reset/password-reset.component';

const components = [
  AppComponent,
  BooksComponent,
  BooksRentComponent,
  BookItemComponent,
  AdminBooksComponent,
  AdminBooksAddComponent,
  HeaderComponent,
  LandingComponent,
];

const modules = [
  BrowserModule,
  HttpClientModule,
  AppRoutingModule,
  FormsModule,
  BrowserAnimationsModule,
  MaterialModule,
  AuthModule,
  FlexLayoutModule,
];

@NgModule({
  declarations: [components, LandingComponent, LoginComponent, RegisterComponent, PasswordResetComponent],
  imports: [modules],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
