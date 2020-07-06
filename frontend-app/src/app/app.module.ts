import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksComponent } from './components/rental/books/books.component';
import { BookItemComponent } from './components/rental/book-item/book-item.component';
import { AddBookComponent } from './components/admin/add-book/add-book.component';

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    BookItemComponent,
    AddBookComponent,
  ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
