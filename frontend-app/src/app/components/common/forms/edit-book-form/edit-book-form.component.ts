import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inject } from '@angular/core';

import { FormBuilder, Validators } from '@angular/forms';

import { Book } from 'src/app/models/Book';
import { CrudService } from '../../../../services/crud.service';

@Component({
  selector: 'app-edit-book-form',
  templateUrl: './edit-book-form.component.html',
  styleUrls: ['./edit-book-form.component.scss'],
})
export class EditBookFormComponent implements OnInit {
  editBookForm = this.formBuilder.group({
    title: [this.data.title, Validators.required],
    author: [this.data.author, Validators.required],
    genre: [this.data.genre, Validators.required],
  });

  result: string = '';

  constructor(
    private booksService: CrudService,
    private formBuilder: FormBuilder,
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  editBook(book: Book) {
    this.booksService.update('localhost:3000/books', book.id, book).subscribe(
      (book) => {
        this.result = `Book "${book.title}" was successfully updated.`;
      },
      (err) => (this.result = err)
    );
  }

  onSubmit(formValue) {
    const item = {
      id: this.data.id,
      title: formValue.title,
      author: formValue.author,
      genre: formValue.genre,
      available: this.data.available,
      heldByClient: this.data.heldByClient,
    };

    this.editBook(item);
  }

  ngOnInit(): void {}
}
