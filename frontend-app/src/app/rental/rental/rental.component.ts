import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';
import { Book } from 'src/app/interfaces/book';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.scss'],
})
export class RentalComponent implements OnInit {
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
