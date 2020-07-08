import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Book } from 'src/app/models/Book';
import { UUID } from 'angular2-uuid';
import { RentalService } from '../../../services/rental.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-admin-books-add',
  templateUrl: './admin-books-add.component.html',
  styleUrls: ['./admin-books-add.component.scss'],
})
export class AdminBooksAddComponent implements OnInit {
  // @Output() addBook: EventEmitter<any> = new EventEmitter();

  title: string = '';
  author: string = '';
  genre: string = '';

  warningVisibility: string = 'hidden';
  result: string = '';
  // resultVisibility: string = 'hidden';
  // lastAddedBook: Book;

  constructor(private rentalService: RentalService) {}

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
    // this.resultVisibility = 'hidden';
    // this.lastAddedBook = null;
    form.reset();
  }

  addBook(book: Book) {
    this.rentalService.addBook(book).subscribe(
      (book) => {
        console.log(book);

        this.result = `Book "${book.title}" was added succesfully and its ID is: [${book.id}].`;

        // this.lastAddedBook = book;
        // this.resultVisibility = 'visible';
      },

      (err) => {
        console.log(err);
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
        heldByClient: UUID.UUID(),
      };

      this.addBook(book);
    }
  }

  ngOnInit(): void {}
}
