import { Component, OnInit } from '@angular/core';
import { IBook } from 'src/app/interfaces/IBook';
import { RentalService } from 'src/app/services/rental.service';
import { Book } from 'src/app/models/Book';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss'],
})
export class AddBookComponent implements OnInit, IBook {
  title: string;
  author: string;
  genre: string;
  available: boolean;
  id: number;
  heldByClient: number | null | undefined;

  constructor(private rentalService: RentalService) {}

  ngOnInit(): void {}

  addBook(book: Book) {
    this.rentalService.addBook(book).subscribe();
  }

  onSubmit() {
    const book = {
      title: this.title,
      author: this.author,
      available: this.available,
      genre: this.genre,
      id: this.id,
      heldByClient: this.heldByClient,
    };

    this.addBook(book);
  }
}
