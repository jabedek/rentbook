import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-crud-table',
  templateUrl: './crud-table.component.html',
  styleUrls: ['./crud-table.component.scss'],
})

// TO/MAYBE DO? Type input for this component (Passing types <T>)
export class CrudTableComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  @Input() items: any[] | null;
  @Input() service: any | null = null;
  @Input() addItemDialogComponent: any; // what should be displayed after Add btn in dialog
  @Input() editItemDialogComponent: any; // what should be displayed after Add btn in dialog

  dataSource;
  displayedColumns: string[];

  private mapItemPropsToColumns() {
    if (this.items.length) {
      this.displayedColumns = [...Object.keys(this.items[0]), 'actions'];
      this.dataSource = new MatTableDataSource(this.items);
    }
  }

  onDelete(item) {
    this.service.delete(item.id).subscribe(
      (data) => {
        this.updateItems();
      },
      (err) => console.log(err)
    );
  }

  openDialog(which, item?) {
    console.log('dialog open');

    switch (which) {
      case 'add': {
        this.dialog.open(this.addItemDialogComponent);
      }
      case 'edit': {
        if (item) {
          this.dialog.open(this.editItemDialogComponent, { data: item });
        }
      }
    }
  }

  updateItems() {
    if (this.service) {
      this.service.read().subscribe((data) => {
        this.items = data;
        this.mapItemPropsToColumns();
      });
    }
  }

  @ViewChild(MatSort, { static: true }) sort: MatSort;

  ngOnInit(): void {
    this.updateItems();
  }
}
