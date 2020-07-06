import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { IBook } from 'src/app/interfaces/IBook';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss'],
})
export class AddBookComponent implements OnInit, IBook {
  // Set 'addTodo' event emitter (emitting to parent component with book object)
  @Output() addTodo: EventEmitter<any> = new EventEmitter();

  title: string;
  author: string;
  available: boolean;
  id: number;
  heldByClient?: number;

  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    const book = {
      title: this.title,
      author: this.author,
      available: this.available,
      id: this.id,
      heldByClient: this.heldByClient,
    };

    this.addTodo.emit(book);
  }
}
