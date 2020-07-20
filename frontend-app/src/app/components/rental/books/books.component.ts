import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/Book';
import { BooksCrudService } from 'src/app/services/books-crud.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
})
export class BooksComponent implements OnInit {
  books: Book[];

  constructor(private booksService: BooksCrudService) {}

  getBooks() {
    this.booksService.read().subscribe(
      (books) => (this.books = books),
      (err) => console.log(err)
    );
  }

  rentBook(book: Book) {
    // TODO
  }

  ngOnInit(): void {
    this.getBooks();
  }
}
