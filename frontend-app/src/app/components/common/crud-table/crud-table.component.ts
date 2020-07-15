import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { Book } from '../../../models/Book';
import { User } from '../../../models/User';
import { BooksService } from '../../../services/books.service';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-crud-table',
  templateUrl: './crud-table.component.html',
  styleUrls: ['./crud-table.component.scss'],
})
export class CrudTableComponent implements OnInit {
  // TODO" Type input for this component (Passing types <T>)
  books: Book[];
  items: [];
  dataSource;
  columns: string[] = [];

  userItem = {
    id: '789-678',
    email: 'LOTR',
    password: 'JRR TOLKIEN',
  };

  bookItem = {
    id: '123-456',
    title: 'LOTR',
    author: 'JRR TOLKIEN',
    genre: 'FANTASY',
    available: true,
    heldByClient: '000-000',
  };

  mapItemPropsToColumns(item) {
    this.columns = Object.keys(item);
    console.log(this.columns);

    // if (props.length) {
    //   this.columns = props.map((prop) => {
    //     return prop.charAt(0).toUpperCase() + prop.slice(1);
    //   });
    //   console.log(this.columns);
    // }
  }

  // displayedColumns: string[] = [
  //   'Title',
  //   'Author',
  //   'Genre',
  //   'Available',
  //   'Id',
  //   'HeldByClient',
  //   'Actions',
  // ];

  constructor(private booksService: BooksService) {}

  getBooks() {
    // this.booksService.getBooks().subscribe((books) => {
    //   this.books = books;
    //   if (!this.books.length) {
    //   }
    //   this.dataSource = new MatTableDataSource(this.books);
    // });
  }

  deleteBook(book: Book) {
    // Delete from UI
    this.books = this.books.filter((b) => {
      return book.id !== b.id;
    });

    // Update mat-table in template
    this.dataSource = new MatTableDataSource(this.books);

    // Delete from server
    this.booksService.deleteBook(book).subscribe();
  }

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  ngOnInit(): void {
    this.mapItemPropsToColumns(this.userItem);
  }
}
