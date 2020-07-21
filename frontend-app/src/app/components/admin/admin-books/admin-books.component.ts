import { Component, OnInit } from '@angular/core';
import { Book } from '../../../models/Book';
import { BooksCrudService } from '../../../services/books-crud.service';
@Component({
  selector: 'app-admin-books',
  templateUrl: './admin-books.component.html',
  styleUrls: ['./admin-books.component.scss'],
})
export class AdminBooksComponent implements OnInit {
  books: Book[];
  booksService: BooksCrudService;

  constructor(service: BooksCrudService) {
    this.booksService = service;
  }

  getBooks() {
    return this.booksService.read().subscribe(
      (books) => {
        this.books = books;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  deleteBook(book: Book) {
    // Delete from UI
    this.books = this.books.filter((b) => {
      return book.id !== b.id;
    });

    // Delete from server
    this.booksService.delete(book.id).subscribe();

    this.getBooks();
  }

  ngOnInit(): void {
    this.getBooks();
  }

  ngOnChanges(): void {}
}
