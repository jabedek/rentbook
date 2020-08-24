import { Component, Output, EventEmitter, Input } from '@angular/core';
@Component({
  selector: 'app-crud-table-paginator',
  templateUrl: './crud-table-paginator.component.html',
  styleUrls: ['./crud-table-paginator.component.scss'],
})
export class CrudTablePaginatorComponent {
  @Output('selectPage') selectPage = new EventEmitter<string>();
  @Input() currentPage: number;

  emitSelection(selectedPage: string) {
    this.selectPage.emit(selectedPage);
  }
}
