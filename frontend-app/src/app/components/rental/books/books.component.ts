import { Component, OnInit, ViewChild } from '@angular/core';
import { Book } from '../../../models/Book';
import { RentalService } from '../../../services/rental.service';

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

  rentBook(book: Book) {
    // TODO
  }

  ngOnInit(): void {
    this.getBooks();
  }
}
