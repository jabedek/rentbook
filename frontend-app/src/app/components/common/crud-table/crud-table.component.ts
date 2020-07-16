import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { Book } from '../../../models/Book';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-crud-table',
  templateUrl: './crud-table.component.html',
  styleUrls: ['./crud-table.component.scss'],
})
export class CrudTableComponent implements OnInit {
  // TODO" Type input for this component (Passing types <T>)
  // books: Book[];
  items: any[] = [
    {
      id: '123-456',
      // title: 'LOTR',
      // author: 'JRR TOLKIEN',
      // genre: 'FANTASY',
      // available: true,
      // heldByClient: '000-000',
    },
  ];
  dataSource;
  columnsToDisplay: string[] = [];

  mapItemPropsToColumns(item) {
    this.columnsToDisplay = [...Object.keys(item), 'actions'];

    this.columnsToDisplay = ['id'];

    this.dataSource = new MatTableDataSource(this.items);
  }

  constructor() {}

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  ngOnInit(): void {
    // let userItem = {
    //   id: '789-678',
    //   email: 'LOTR',
    //   password: 'JRR TOLKIEN',
    // };

    // let bookItem = {
    //   id: '123-456',
    //   title: 'LOTR',
    //   author: 'JRR TOLKIEN',
    //   genre: 'FANTASY',
    //   available: true,
    //   heldByClient: '000-000',
    // };

    // this.items.push(bookItem);

    this.mapItemPropsToColumns(this.items[0]);
  }
}
