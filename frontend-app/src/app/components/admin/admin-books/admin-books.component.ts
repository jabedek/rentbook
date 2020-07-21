import { Component, OnInit } from '@angular/core';
import { Book } from '../../../models/Book';
import { BooksCrudService } from '../../../services/books-crud.service';
import { AddBookFormComponent } from '../../common/forms/add-book-form/add-book-form.component';
import { EditBookFormComponent } from '../../common/forms/edit-book-form/edit-book-form.component';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-admin-books',
  templateUrl: './admin-books.component.html',
  styleUrls: ['./admin-books.component.scss'],
})
export class AdminBooksComponent implements OnInit {
  books: Book[];
  booksService: BooksCrudService;
  addItemDialogComponent = AddBookFormComponent;
  editItemDialogComponent = EditBookFormComponent;

  addItemDialogRef: MatDialogRef<AddBookFormComponent>;
  editItemDialogRef: MatDialogRef<EditBookFormComponent>;

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
