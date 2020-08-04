import { BackendData } from './../../../types/BackendData';
import {
  Component,
  OnInit,
  ViewChild,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { CrudService } from '../../../services/crud.service';
import { ITableConfig, IUser, IBook } from '../../../interfaces';

@Component({
  selector: 'app-crud-table',
  templateUrl: './crud-table.component.html',
  styleUrls: ['./crud-table.component.scss'],
  providers: [CrudService],
})

// TO/MAYBE DO? Type input for this component (Passing types <T>)
export class CrudTableComponent implements OnInit, OnChanges {
  // questions$: Observable<QuestionBase<any>[]> = null;

  @Input() config: ITableConfig;
  items = [];
  dataSource;
  displayedColumns: string[];
  currentlyEdited: null | BackendData = null;

  constructor(public dialog: MatDialog, private crudService: CrudService) {}

  private mapItemPropsToColumns() {
    this.displayedColumns = this.config.columns.map((col) => col.label);

    this.dataSource = new MatTableDataSource(this.items);
  }

  onCreate(item: BackendData) {
    this.items.push(item);
    this.mapItemPropsToColumns();
    this.crudService.create(this.config.url, item).subscribe(() => {
      this.fetchItems(), (err) => console.log(err);
    });
  }

  onDelete(item: BackendData) {
    this.items = this.items.filter((i) => {
      return item.id !== i.id;
    });

    this.mapItemPropsToColumns();

    this.crudService.delete(this.config.url, item.id).subscribe(
      () => {
        this.fetchItems();
      },
      (err) => console.log(err)
    );

    if (this.items.length == 0) {
      console.log('no items');
    }
  }

  onEdit(item: BackendData) {
    this.currentlyEdited = item;
  }

  fetchItems() {
    if (this.crudService) {
      this.crudService.read(this.config.url).subscribe((data) => {
        if (data.length > 0) {
          this.items = data;
          console.log('items fetched:', this.items);
        } else {
          this.items = [];
        }

        this.mapItemPropsToColumns();
      });
    }
  }

  @ViewChild(MatSort, { static: true }) sort: MatSort;

  ngOnInit(): void {
    this.fetchItems();
  }

  ngOnChanges(changes: SimpleChanges) {}
}
