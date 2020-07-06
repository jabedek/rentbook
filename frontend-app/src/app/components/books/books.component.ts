import { Component, OnInit } from '@angular/core';
import { Book } from '../../models/Book';
import { RentalService } from '../../services/rental.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
})
export class BooksComponent implements OnInit {
  books: Book[];
  constructor(private service: RentalService) {}

  ngOnInit(): void {
    this.service.getBooks().subscribe((books) => (this.books = books));
  }
}
