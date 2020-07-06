import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Book } from 'src/app/models/Book';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.scss'],
})
export class BookItemComponent implements OnInit {
  @Input() book: Book;

  @Output() deleteBook: EventEmitter<Book> = new EventEmitter();

  ngOnInit(): void {}

  onDelete(book: Book) {
    console.log('deleting me:', book.title);
    this.deleteBook.emit(book);
  }
}
