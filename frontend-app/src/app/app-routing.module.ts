import { AuthModule } from './auth/auth.module';
import { AuthGuard } from './auth/auth.guard';
import { LoginComponent } from './auth/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';

import { HomeComponent } from './components/main/home/home.component';
import { RegisterComponent } from './components/account/register/register.component';
import { AdminBooksComponent } from './components/admin/admin-books/admin-books.component';
import { AdminUsersComponent } from './components/admin/admin-users/admin-users.component';

// const routes: Routes = [
//   { path: '', component: HomeComponent },
//   { path: 'rental', component: BooksComponent },
//   { path: 'admin/books', component: AdminBooksComponent },
//   { path: 'admin/users', component: AdminUsersComponent },
//   { path: 'login', component: LoginComponent },
//   { path: 'register', component: RegisterComponent },
//   { path: '**', redirectTo: '/' },
// ];

const appRoutes: Routes = [
  // { path: 'register', component: RegisterComponent },
  // {
  //   path: 'admin',
  //   loadChildren: () =>
  //     import('./admin/admin.module').then((m) => m.AdminModule),
  //   canLoad: [AuthGuard],
  // },
  { path: 'admin/books', component: AdminBooksComponent },
  { path: 'admin/users', component: AdminUsersComponent },
  {
    path: 'rental',
    loadChildren: () =>
      import('./rental/rental.module').then((m) => m.RentalModule),
    // data: { preload: true },
  },
  // { path: '', component: HomeComponent, pathMatch: 'full' },
  // { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
