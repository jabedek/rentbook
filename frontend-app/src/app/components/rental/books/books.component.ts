import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/Book';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
})
export class BooksComponent implements OnInit {
  books: Book[];

  constructor(private booksService: CrudService) {}

  getBooks() {
    this.booksService.read('http://localhost:3000/books').subscribe(
      (books) => (this.books = books),
      (err) => console.log(err)
    );
  }

  ngOnInit(): void {
    this.getBooks();
  }
}
