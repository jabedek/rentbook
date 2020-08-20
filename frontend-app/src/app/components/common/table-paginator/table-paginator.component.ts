import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-table-paginator',
  templateUrl: './table-paginator.component.html',
  styleUrls: ['./table-paginator.component.scss'],
})
export class TablePaginatorComponent {
  @Output('selectPage') selectPage = new EventEmitter<string>();
  @Input() currentPage: number;

  emitSelection(selectedPage: string) {
    this.selectPage.emit(selectedPage);
  }
}
