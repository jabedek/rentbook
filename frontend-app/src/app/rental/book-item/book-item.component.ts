import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Book } from './../../shared/interfaces/book';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.scss'],
})
export class BookItemComponent implements OnInit {
  @Input() book: Book;

  @Output() rentBook: EventEmitter<Book> = new EventEmitter();

  onRent(book: Book) {
    this.rentBook.emit(book);
  }

  ngOnInit(): void {}
}
