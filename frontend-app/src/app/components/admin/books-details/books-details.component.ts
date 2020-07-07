import { Component, OnInit, ViewChild } from '@angular/core';
import { Book } from '../../../models/Book';
import { RentalService } from '../../../services/rental.service';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-books-details',
  templateUrl: './books-details.component.html',
  styleUrls: ['./books-details.component.scss'],
})
export class BooksDetailsComponent implements OnInit {
  books: Book[];

  displayedColumns: string[] = [
    'Title',
    'Author',
    'Genre',
    'Available',
    'Id',
    'HeldByClient',
    'Actions',
  ];

  dataSource;

  constructor(private rentalService: RentalService) {}

  getBooks() {
    this.rentalService.getBooks().subscribe((books) => {
      this.books = books;
      this.dataSource = new MatTableDataSource(this.books);
    });
  }

  deleteBook(book: Book) {
    // Delete from UI
    this.books = this.books.filter((b) => {
      return book.id !== b.id;
    });

    this.dataSource = new MatTableDataSource(this.books);

    // Delete from server
    this.rentalService.deleteBook(book).subscribe();
  }

  addBook(book: Book) {
    this.rentalService.addBook(book).subscribe(
      (book) => {
        this.books.push(book);

        this.dataSource = new MatTableDataSource(this.books);
      },

      (err) => console.log(err)
    );
  }

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  ngOnInit(): void {
    this.getBooks();

    this.dataSource.sort = this.sort;
  }
}
