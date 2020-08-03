import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { FormBuilder, Validators } from '@angular/forms';
import { UUID } from 'angular2-uuid';

import { CrudService } from '../../../../services/crud.service';
import { IBook } from 'src/app/interfaces';

@Component({
  selector: 'app-add-book-form',
  templateUrl: './add-book-form.component.html',
  styleUrls: ['./add-book-form.component.scss'],
})
export class AddBookFormComponent implements OnInit {
  addBookForm = this.formBuilder.group({
    title: ['', [Validators.required]],
    author: ['', Validators.required],
    genre: ['', Validators.required],
  });

  resultMessage: string = '';

  constructor(
    private booksService: CrudService,
    private formBuilder: FormBuilder,
    public dialog: MatDialog
  ) {}

  addBook(book: IBook) {
    this.booksService.create('http://localhost:3000/books', book).subscribe(
      (book) => {
        this.resultMessage = `Book "${book.title}" was added succesfully.`;
      },

      (err) => {
        this.resultMessage = err;
      }
    );
  }

  onSubmit(formValue) {
    const book: IBook = {
      id: UUID.UUID(),
      title: formValue.title,
      author: formValue.author,
      genre: formValue.genre,
      available: true,
    };

    this.addBook(book);
  }

  ngOnInit(): void {}
}
