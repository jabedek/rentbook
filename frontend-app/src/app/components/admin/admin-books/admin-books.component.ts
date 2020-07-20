import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { Book } from '../../../models/Book';
import { BooksCrudService } from '../../../services/books-crud.service';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-admin-books',
  templateUrl: './admin-books.component.html',
  styleUrls: ['./admin-books.component.scss'],
})
export class AdminBooksComponent implements OnInit {
  books: Book[];
  dataSource;
  displayedColumns: string[] = [
    'Title',
    'Author',
    'Genre',
    'Available',
    'Id',
    'HeldByClient',
    'Actions',
  ];

  constructor(private booksService: BooksCrudService) {}

  // getBooks() {
  //   this.booksService.getBooks().subscribe((books) => {
  //     this.books = books;

  //     if (!this.books.length) {
  //     }

  //     this.dataSource = new MatTableDataSource(this.books);
  //   });
  // }

  getBooks() {
    this.booksService.read().subscribe(
      (books) => {
        this.books = books;
        this.dataSource = new MatTableDataSource(this.books);
      },
      (err) => console.log(err)
    );
  }

  deleteBook(book: Book) {
    // Delete from UI
    this.books = this.books.filter((b) => {
      return book.id !== b.id;
    });

    // Update mat-table in template
    this.dataSource = new MatTableDataSource(this.books);

    // Delete from server
    this.booksService.delete(book.id).subscribe();
  }

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  ngOnInit(): void {
    this.getBooks();

    // TODO: sorting functions
    // this.dataSource.sort = this.sort;
  }
}
