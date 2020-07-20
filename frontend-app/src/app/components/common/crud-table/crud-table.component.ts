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

@Component({
  selector: 'app-crud-table',
  templateUrl: './crud-table.component.html',
  styleUrls: ['./crud-table.component.scss'],
})
// TO/MAYBE DO? Type input for this component (Passing types <T>)
export class CrudTableComponent implements OnInit, OnChanges {
  @Input() items: any[] | null;
  @Input() service: any | null = null;

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
        console.log('deleting', item.id, data);

        this.updateItems();
      },
      (err) => console.log(err)
    );
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

  ngOnChanges(changes: SimpleChanges): void {
    console.log('changes', changes);
    // this.mapItemPropsToColumns();
  }
}
