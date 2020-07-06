import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooksComponent } from './components/rental/books/books.component';
import { AddBookComponent } from './components/admin/add-book/add-book.component';
import { LandingComponent } from './components/main/landing/landing.component';
import { AboutComponent } from './components/about/about/about.component';
import { HomeComponent } from './components/main/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'rental', component: BooksComponent },
  { path: 'admin/add-book', component: AddBookComponent },
  { path: 'about', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
