import { MaterialModule } from './../material/material.module';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RentalRoutingModule } from './rental-routing.module';
import { RentalComponent } from './rental/rental.component';
import { BookItemComponent } from './book-item/book-item.component';
import { BooksListComponent } from './books-list/books-list.component';

@NgModule({
  declarations: [RentalComponent, BookItemComponent, BooksListComponent],
  imports: [CommonModule, RentalRoutingModule, SharedModule, MaterialModule],
})
export class RentalModule {}
