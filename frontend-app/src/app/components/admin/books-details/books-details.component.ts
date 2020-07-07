import { Component, OnInit } from '@angular/core';
import { Book } from '../../../models/Book';
import { RentalService } from '../../../services/rental.service';

@Component({
  selector: 'app-books-details',
  templateUrl: './books-details.component.html',
  styleUrls: ['./books-details.component.scss'],
})
export class BooksDetailsComponent implements OnInit {
  books: Book[];
  constructor(private rentalService: RentalService) {}

  getBooks() {
    this.rentalService.getBooks().subscribe((books) => (this.books = books));
  }

  deleteBook(book: Book) {
    this.books = this.books.filter((b) => {
      return book.id !== b.id;
    });
    this.rentalService.deleteBook(book).subscribe();
  }

  addBook(book: Book) {
    this.rentalService.addBook(book).subscribe(
      (book) => this.books.push(book),
      (err) => console.log(err)
    );
  }

  ngOnInit(): void {
    this.getBooks();
  }
}
