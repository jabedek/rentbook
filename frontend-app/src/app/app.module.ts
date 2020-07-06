import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksComponent } from './components/rental/books/books.component';
import { BookItemComponent } from './components/rental/book-item/book-item.component';
import { AddBookComponent } from './components/admin/add-book/add-book.component';
import { HeaderComponent } from './components/common/layout/header/header.component';
import { HomeComponent } from './components/main/home/home.component';
import { LandingComponent } from './components/main/landing/landing.component';
import { AboutComponent } from './components/about/about/about.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    BookItemComponent,
    AddBookComponent,
    HeaderComponent,
    HomeComponent,
    LandingComponent,
    AboutComponent,
  ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule, FormsModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
