import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/Book';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.scss'],
})
export class BookItemComponent implements OnInit {
  book: Book;

  constructor(book: Book) {
    this.book = book;
  }

  ngOnInit(): void {}
}
