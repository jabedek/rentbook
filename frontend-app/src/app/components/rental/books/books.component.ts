import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/Book';
import { RentalService } from 'src/app/services/rental.service';

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
    // this.books = this.rentalService.getBooks();
  }

  rentBook(book: Book) {
    // TODO
  }

  ngOnInit(): void {
    this.getBooks();
  }
}
