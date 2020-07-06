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

  getBooks() {
    this.rentalService.getBooks().subscribe((books) => (this.books = books));
  }

  addBook(book: Book) {
    this.rentalService.addBook(book).subscribe((book) => this.books.push(book));
  }

  deleteBook(book: Book) {
    console.log('delete a book');

    this.books = this.books.filter((b) => {
      return book.id !== b.id;
    });

    this.rentalService.deleteBook(book).subscribe();
  }

  ngOnInit(): void {
    // Get all Books on-load
    this.getBooks();
    // this.addBook(new Book('A', 'A', false, 5))
  }
}
