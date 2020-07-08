import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { Book } from '../../../models/Book';
import { RentalService } from '../../../services/rental.service';
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

  constructor(private rentalService: RentalService) {}

  getBooks() {
    this.rentalService.getBooks().subscribe((books) => {
      this.books = books;
      // console.log(this.books);

      if (!this.books.length) {
        // this.books = this.rentalService.populateBooks();
      }

      this.dataSource = new MatTableDataSource(this.books);
    });

    // this.books = this.rentalService.getBooks();
    // this.dataSource = new MatTableDataSource(this.books);
  }

  deleteBook(book: Book) {
    // Delete from UI
    this.books = this.books.filter((b) => {
      return book.id !== b.id;
    });

    // Update mat-table in template
    this.dataSource = new MatTableDataSource(this.books);

    // Delete from server
    this.rentalService.deleteBook(book).subscribe();
  }

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  ngOnInit(): void {
    this.getBooks();

    // TODO: sorting functions
    // this.dataSource.sort = this.sort;
  }
}
