import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Book } from 'src/app/models/Book';
import { UUID } from 'angular2-uuid';

@Component({
  selector: 'app-admin-books-add',
  templateUrl: './admin-books-add.component.html',
  styleUrls: ['./admin-books-add.component.scss'],
})
export class AdminBooksAddComponent implements OnInit {
  @Output() addBook: EventEmitter<any> = new EventEmitter();

  title: string = '';
  author: string = '';
  genre: string = '';
  warningVisibility: string = 'hidden';

  ngOnInit(): void {}

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

  onSubmit() {
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

      this.addBook.emit(book);
    }
  }
}
