import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { FormBuilder, Validators } from '@angular/forms';
import { UUID } from 'angular2-uuid';

import { Book } from 'src/app/models/Book';
import { BooksService } from '../../../services/books.service';

@Component({
  selector: 'app-admin-books-add',
  templateUrl: './admin-books-add.component.html',
  styleUrls: ['./admin-books-add.component.scss'],
})
export class AdminBooksAddComponent implements OnInit {
  addBookForm = this.formBuilder.group({
    title: ['', Validators.required],
    author: ['', Validators.required],
    genre: ['', Validators.required],
  });

  // title: string = '';
  // author: string = '';
  // genre: string = '';

  warningVisibility: string = 'hidden';
  result: string = '';

  constructor(
    private booksService: BooksService,
    private formBuilder: FormBuilder
  ) {}

  addBook(book: Book) {
    this.booksService.addBook(book).subscribe(
      (book) => {
        this.result = `Book "${book.title}" was added succesfully and its ID is: [${book.id}].`;
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
