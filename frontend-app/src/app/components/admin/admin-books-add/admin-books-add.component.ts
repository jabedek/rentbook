import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/Book';
import { UUID } from 'angular2-uuid';
import { BooksService } from '../../../services/books.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-admin-books-add',
  templateUrl: './admin-books-add.component.html',
  styleUrls: ['./admin-books-add.component.scss'],
})
export class AdminBooksAddComponent implements OnInit {
  title: string = '';
  author: string = '';
  genre: string = '';

  warningVisibility: string = 'hidden';
  result: string = '';

  constructor(private booksService: BooksService) {}

  isFormValid(): boolean {
    if (!this.title.length || !this.author.length || !this.genre.length) {
      console.log('INVALID');
      this.warningVisibility = 'visible';
      return false;
    } else {
      this.warningVisibility = 'hidden';
      return true;
    }
  }

  clearForm(form: NgForm): void {
    this.title = '';
    this.author = '';
    this.genre = '';
    this.warningVisibility = 'hidden';
    this.result = '';

    form.reset();
  }

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

  onSubmit() {
    console.log('submitting');

    const isValid = this.isFormValid();
    if (isValid) {
      const book: Book = {
        id: UUID.UUID(),
        title: this.title,
        author: this.author,
        genre: this.genre,
        available: true,
        heldByClient: `00000000-0000-0000-0000-000000000000`,
      };

      this.addBook(book);
    }
  }

  ngOnInit(): void {}
}
