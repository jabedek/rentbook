import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { IBook } from 'src/app/interfaces';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.scss'],
})
export class BookItemComponent implements OnInit {
  @Input() book: IBook;

  @Output() rentBook: EventEmitter<IBook> = new EventEmitter();

  ngOnInit(): void {}

  onRent(book: IBook) {
    this.rentBook.emit(book);
  }
}
