import {
  Component,
  OnInit,
  ViewChild,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { DynamicFormComponent } from './../forms/dynamic-form/dynamic-form.component';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CrudService } from '../../../services/crud.service';
import { ITableConfig } from '../../../interfaces';

@Component({
  selector: 'app-crud-table',
  templateUrl: './crud-table.component.html',
  styleUrls: ['./crud-table.component.scss'],
  providers: [CrudService],
})

// TO/MAYBE DO? Type input for this component (Passing types <T>)
export class CrudTableComponent implements OnInit, OnChanges {
  @Input() config: ITableConfig;
  items: any[] | null;
  dataSource;
  displayedColumns: string[];

  constructor(public dialog: MatDialog, private service: CrudService) {}

  private mapItemPropsToColumns() {
    if (this.items.length) {
      this.displayedColumns = [
        ...Object.keys(this.items[0]),
        ...this.config.columns,
      ];
    }
    this.dataSource = new MatTableDataSource(this.items);
  }

  onDelete(item) {
    this.items = this.items.filter((i) => {
      return item.id !== i.id;
    });

    this.mapItemPropsToColumns();

    this.service.delete(this.config.url, item.id).subscribe(
      () => {
        this.fetchItems();
      },
      (err) => console.log(err)
    );

    this.fetchItems();

    if (this.items.length == 0) {
      console.log('no items');
    }
  }

  openDialog(mode, item?) {
    console.log('openDialog', mode, item);

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      mode,
      item,
    };

    const dialogRef = this.dialog.open(DynamicFormComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(() => this.fetchItems());

    // this.dialog
    //   .open(DynamicFormComponent, dialogConfig)
    //   .afterClosed()
    //   .subscribe(() => this.fetchItems());

    // this.dialog.open(DynamicFormComponent);
  }

  fetchItems() {
    if (this.service) {
      console.log(this.config);
      this.service.read(this.config.url).subscribe((data) => {
        if (data.length) {
          console.log(data);
          this.items = data;
        } else {
          this.items = [];
        }

        this.mapItemPropsToColumns();
      });
    }
  }

  @ViewChild(MatSort, { static: true }) sort: MatSort;

  ngOnInit(): void {
    if (this.service) {
      this.fetchItems();
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('crud-table: changes');
    console.log(changes);
  }
}
