import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { Book } from '../../../models/Book';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-crud-table',
  templateUrl: './crud-table.component.html',
  styleUrls: ['./crud-table.component.scss'],
})
// TODO" Type input for this component (Passing types <T>)
export class CrudTableComponent implements OnInit {
  items: any[] = [
    {
      id: '123-456',
      title: 'LOTR',
      author: 'JRR TOLKIEN',
      genre: 'FANTASY',
      available: true,
      heldByClient: '000-000',
    },
  ];

  dataSource;
  displayedColumns: string[];

  mapItemPropsToColumns() {
    this.displayedColumns = [...Object.keys(this.items[0]), 'actions'];

    this.dataSource = new MatTableDataSource(this.items);
  }

  constructor() {}

  @ViewChild(MatSort, { static: true }) sort: MatSort;

  ngOnInit(): void {
    this.mapItemPropsToColumns();
  }
}
