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

@Component({
  selector: 'app-crud-table',
  templateUrl: './crud-table.component.html',
  styleUrls: ['./crud-table.component.scss'],
})

// TO/MAYBE DO? Type input for this component (Passing types <T>)
export class CrudTableComponent implements OnInit, OnChanges {
  constructor(public dialog: MatDialog) {}

  items: any[] | null;
  @Input() name: string;
  @Input() service: any | null = null;
  @Input() addItemDialogComponent: any; // what should be displayed after Add btn in dialog
  @Input() editItemDialogComponent: any; // what should be displayed after Add btn in dialog

  dataSource;
  displayedColumns: string[];

  private mapItemPropsToColumns() {
    if (this.items.length) {
      this.displayedColumns = [...Object.keys(this.items[0]), 'actions'];
    }
    this.dataSource = new MatTableDataSource(this.items);
  }

  onDelete(item) {
    // Delete from UI
    console.log('crud-table: deleting ui');
    this.items = this.items.filter((i) => {
      return item.id !== i.id;
    });

    this.mapItemPropsToColumns();
    // console.log('crud-tale: items', this.items);

    // delete from server
    console.log('crud-table: deleting server');
    this.service.delete(item.id).subscribe(
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

  openDialog(which, item?) {
    console.log(this.dialog);

    switch (which) {
      case 'add': {
        const dialogRef = this.dialog.open(this.addItemDialogComponent);
        dialogRef.afterClosed().subscribe(() => this.fetchItems());
      }
      case 'edit': {
        if (item) {
          const dialogRef = this.dialog.open(this.editItemDialogComponent, {
            data: item,
          });
          dialogRef.afterClosed().subscribe(() => this.fetchItems());
        }
      }
    }
  }

  fetchItems() {
    if (this.service) {
      this.service.read().subscribe((data) => {
        if (data.length) {
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
