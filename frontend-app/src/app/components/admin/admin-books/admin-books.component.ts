import { Component } from '@angular/core';
import { BooksCrudService } from '../../../services/books-crud.service';
import { AddBookFormComponent } from '../../common/forms/add-book-form/add-book-form.component';
import { EditBookFormComponent } from '../../common/forms/edit-book-form/edit-book-form.component';

@Component({
  selector: 'app-admin-books',
  templateUrl: './admin-books.component.html',
  styleUrls: ['./admin-books.component.scss'],
})
export class AdminBooksComponent {
  booksService: BooksCrudService;

  addItemDialogComponent = AddBookFormComponent;
  editItemDialogComponent = EditBookFormComponent;

  constructor(service: BooksCrudService) {
    this.booksService = service;
  }
}
