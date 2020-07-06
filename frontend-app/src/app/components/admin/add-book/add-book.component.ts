import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { IBook } from 'src/app/interfaces/IBook';
import { Book } from 'src/app/models/Book';
import { RentalService } from 'src/app/services/rental.service';
import { UUID } from 'angular2-uuid';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss'],
})
export class AddBookComponent implements OnInit, IBook {
  @Output() addBook: EventEmitter<any> = new EventEmitter();

  title: string;
  author: string;
  genre: string;
  available: boolean;
  id: string;
  heldByClient: number | null | undefined;

  constructor(private rentalService: RentalService) {}

  ngOnInit(): void {}

  onSubmit() {
    const book: Book = {
      id: UUID.UUID(),
      title: this.title,
      author: this.author,
      genre: this.genre,
      available: true,
      heldByClient: null,
    };

    this.addBook.emit(book);
  }
}
