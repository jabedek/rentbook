import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/main/home/home.component';
import { BooksComponent } from './components/rental/books/books.component';
import { BooksRentComponent } from './components/rental/books-rent/books-rent.component';
import { AdminBooksComponent } from './components/admin/admin-books/admin-books.component';
import { AdminBooksAddComponent } from './components/admin/admin-books-add/admin-books-add.component';
import { LoginComponent } from './components/account/login/login.component';
import { RegisterComponent } from './components/account/register/register.component';
import { PasswordResetComponent } from './components/account/password-reset/password-reset.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { CrudTableComponent } from './components/common/crud-table/crud-table.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'rental/books', component: BooksComponent },
  { path: 'rental/books/rent', component: BooksRentComponent },
  { path: 'admin/books', component: AdminBooksComponent },
  { path: 'admin/books/add', component: AdminBooksAddComponent },
  { path: 'account/login', component: LoginComponent },
  { path: 'account/register', component: RegisterComponent },
  { path: 'account/password-reset', component: PasswordResetComponent },
  { path: 'crud-table', component: CrudTableComponent },
  // { path: '**', component: PageNotFoundComponent, pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
