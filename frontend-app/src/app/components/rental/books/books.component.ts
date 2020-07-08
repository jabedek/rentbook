import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/Book';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
})
export class BooksComponent implements OnInit {
  books: Book[];

  constructor(private booksService: BooksService) {}

  getBooks() {
    this.booksService.getBooks().subscribe((books) => (this.books = books));
    // this.books = this.booksService.getBooks();
  }

  rentBook(book: Book) {
    // TODO
  }

  ngOnInit(): void {
    this.getBooks();
  }
}
