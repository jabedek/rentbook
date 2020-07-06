import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Book } from '../../../models/Book';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.scss'],
})
export class BookItemComponent implements OnInit {
  @Input() book: Book;

  @Output() rentBook: EventEmitter<Book> = new EventEmitter();

  ngOnInit(): void {}

  onRent(book: Book) {
    this.rentBook.emit(book);
  }
}
