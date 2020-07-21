import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { FormBuilder, Validators } from '@angular/forms';
import { UUID } from 'angular2-uuid';

import { Book } from 'src/app/models/Book';
import { BooksCrudService } from '../../../../services/books-crud.service';

@Component({
  selector: 'app-add-book-form',
  templateUrl: './add-book-form.component.html',
  styleUrls: ['./add-book-form.component.scss'],
})
export class AddBookFormComponent implements OnInit {
  addBookForm = this.formBuilder.group({
    title: ['', Validators.required],
    author: ['', Validators.required],
    genre: ['', Validators.required],
  });

  result: string = '';

  constructor(
    private booksService: BooksCrudService,
    private formBuilder: FormBuilder,
    public dialog: MatDialog
  ) {}

  addBook(book: Book) {
    this.booksService.create(book).subscribe(
      (book) => {
        this.result = `Book "${book.title}" was added succesfully.`;
      },

      (err) => {
        this.result = err;
      }
    );
  }

  onSubmit(formValue) {
    const book: Book = {
      id: UUID.UUID(),
      title: formValue.title,
      author: formValue.author,
      genre: formValue.genre,
      available: true,
      heldByClient: `00000000-0000-0000-0000-000000000000`,
    };

    this.addBook(book);
  }

  ngOnInit(): void {}
}
