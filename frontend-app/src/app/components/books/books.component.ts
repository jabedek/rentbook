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

  bookToAdd = new Book('A', 'A', false, 5);

  getBooks() {
    this.rentalService.getBooks().subscribe((books) => (this.books = books));
  }

  addBook(book: Book) {
    this.rentalService
      .addBook(this.bookToAdd)
      .subscribe((book) => this.books.push(book));
  }

  deleteBook(book: Book) {}

  ngOnInit(): void {
    // Get all Books on-load
    this.getBooks();
  }
}
