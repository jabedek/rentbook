import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';
import { IBook } from 'src/app/interfaces';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
})
export class BooksComponent implements OnInit {
  books: IBook[];

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
