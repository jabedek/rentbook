import { Book } from './../../shared/interfaces/book';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss'],
})
export class BooksListComponent implements OnInit {
  @Input() books: Book[];
  constructor() {}

  ngOnInit(): void {}
}
