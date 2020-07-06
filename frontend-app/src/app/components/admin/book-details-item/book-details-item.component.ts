import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Book } from '../../../models/Book';

@Component({
  selector: 'app-book-details-item',
  templateUrl: './book-details-item.component.html',
  styleUrls: ['./book-details-item.component.scss'],
})
export class BookDetailsItemComponent implements OnInit {
  @Input() book: Book;

  @Output() deleteBook: EventEmitter<Book> = new EventEmitter();

  ngOnInit(): void {}

  onDelete(book: Book) {
    this.deleteBook.emit(book);
  }
}
