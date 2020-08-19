import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-table-paginator',
  templateUrl: './table-paginator.component.html',
  styleUrls: ['./table-paginator.component.scss'],
})
export class TablePaginatorComponent implements OnInit {
  @Output('selectPage') selectPage = new EventEmitter<string>();
  @Input() currentPage: number;

  public first: string = 'first';
  public prev: string = 'prev';
  public next: string = 'next';
  public last: string = 'last';

  emitSelection(selectedPage: string) {
    console.log('emited');

    this.selectPage.emit(selectedPage);
  }

  constructor() {}

  ngOnInit(): void {}
}
