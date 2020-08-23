import { RouteGuardService } from './guards/route-guard.service';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';

import { HomeComponent } from './components/main/home/home.component';
import { BooksComponent } from './components/rental/books/books.component';
import { LoginComponent } from './components/account/login/login.component';
import { RegisterComponent } from './components/account/register/register.component';
import { AdminBooksComponent } from './components/admin/admin-books/admin-books.component';
import { AdminUsersComponent } from './components/admin/admin-users/admin-users.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'rental', component: BooksComponent },
  { path: 'admin/books', component: AdminBooksComponent },
  { path: 'admin/users', component: AdminUsersComponent },

  { path: 'account/login', component: LoginComponent },
  { path: 'account/register', component: RegisterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
