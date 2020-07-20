import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Book } from '../../../models/Book';
import { BooksCrudService } from '../../../services/books-crud.service';

@Component({
  selector: 'app-admin-books-crud',
  templateUrl: './admin-books-crud.component.html',
  styleUrls: ['./admin-books-crud.component.scss'],
})
export class AdminBooksCrudComponent implements OnInit, OnChanges {
  books: Book[];
  booksService: BooksCrudService;

  constructor(service: BooksCrudService) {
    this.booksService = service;
  }

  getBooks() {
    console.log('updating books in Parent');
    return this.booksService.read().subscribe(
      (books) => {
        console.log('>', books);
        this.books = books;

        // return books;
      },
      (err) => {
        console.log(err);
        // return [];
      }
    );
  }

  // fetchBooks() {
  //   console.log('updating: 3');

  //   this.booksService.getBooks().subscribe(
  //     (books) => {
  //       console.log(books);
  //       return books;
  //     },
  //     (err) => {
  //       console.log(err);
  //       return [];
  //     }
  //   );
  // }

  deleteBook(book: Book) {
    // Delete from UI
    this.books = this.books.filter((b) => {
      return book.id !== b.id;
    });

    // Update mat-table in template
    // this.dataSource = new MatTableDataSource(this.books);

    // Delete from server
    this.booksService.delete(book.id).subscribe();

    this.getBooks();
  }

  ngOnInit(): void {
    this.getBooks();
  }

  ngOnChanges(): void {
    console.log('changes');

    // this.getBooks();
  }
}
