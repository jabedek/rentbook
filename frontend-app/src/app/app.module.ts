import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { AppRoutingModule } from './app-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/common/header/header.component';
import { BooksComponent } from './components/rental/books/books.component';
import { BooksRentComponent } from './components/rental/books-rent/books-rent.component';
import { BookItemComponent } from './components/rental/book-item/book-item.component';
import { AdminBooksComponent } from './components/admin/admin-books/admin-books.component';
import { AdminBooksAddComponent } from './components/admin/admin-books-add/admin-books-add.component';
import { LandingComponent } from './components/main/landing/landing.component';

import { LoginComponent } from './components/account/login/login.component';
import { RegisterComponent } from './components/account/register/register.component';
import { PasswordResetComponent } from './components/account/password-reset/password-reset.component';

const mainComponents = [
  AppComponent,
  BooksComponent,
  BooksRentComponent,
  BookItemComponent,
  AdminBooksComponent,
  AdminBooksAddComponent,
  HeaderComponent,
  LandingComponent,
  RegisterComponent,
  LoginComponent,
  PasswordResetComponent,
];

const modules = [
  BrowserModule,
  HttpClientModule,
  AppRoutingModule,
  FormsModule,
  BrowserAnimationsModule,
  FlexLayoutModule,
  MaterialModule,
  ReactiveFormsModule,
];

@NgModule({
  declarations: mainComponents,
  imports: modules,
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
