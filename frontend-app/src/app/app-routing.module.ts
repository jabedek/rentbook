import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooksComponent } from './components/rental/books/books.component';
import { AboutComponent } from './components/about/about/about.component';
import { HomeComponent } from './components/main/home/home.component';
import { BooksDetailsComponent } from './components/admin/books-details/books-details.component';
import { CreateAccountComponent } from './components/create-account/create-account.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'rental', component: BooksComponent },
  { path: 'admin/books-details', component: BooksDetailsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'create-account', component: CreateAccountComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
