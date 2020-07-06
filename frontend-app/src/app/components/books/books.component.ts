import { Component, OnInit } from '@angular/core';
import { Book } from '../../models/Book';
import { RentalService } from '../../services/rental.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
})
export class BooksComponent implements OnInit {
  books: Book[];
  constructor(private rentalService: RentalService) {}

  bookToAdd = new Book('JS for Dummies', 'E. A. Vander Veer', true, 3);

  ngOnInit(): void {
    // Get all Books on-load
    this.rentalService.getBooks().subscribe((books) => (this.books = books));
  }
}
// this.rentalService
//   .addBook(this.bookToAdd)
//   .subscribe((book) => this.books.push(book));
