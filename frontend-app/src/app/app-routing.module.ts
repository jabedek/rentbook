import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingComponent } from './components/main/landing/landing.component';
import { BooksComponent } from './components/rental/books/books.component';
import { BooksRentComponent } from './components/rental/books-rent/books-rent.component';
import { AdminBooksComponent } from './components/admin/admin-books/admin-books.component';
import { AdminBooksAddComponent } from './components/admin/admin-books-add/admin-books-add.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'rental/books', component: BooksComponent },
  { path: 'rental/books/rent', component: BooksRentComponent },
  { path: 'admin/books', component: AdminBooksComponent },
  { path: 'admin/books/add', component: AdminBooksAddComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
