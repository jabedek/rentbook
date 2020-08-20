import { IPaginationConfig } from './../../../interfaces/table';
import { Component, OnInit, Input } from '@angular/core';
import { Overlay } from '@angular/cdk/overlay';
import { MatDialog } from '@angular/material/dialog';
import { tap } from 'rxjs/operators';
import { DialogComponent } from './../../common/dialog/dialog.component';
import { BackendData } from './../../../types/BackendData';
import { CrudService } from '../../../services/crud.service';
import { ITableConfig } from '../../../interfaces/table';
import {
  parseLinkHeader,
  setLastPage,
  setPagesLinks,
} from '../../../helpers/crud-table';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-crud-table',
  templateUrl: './crud-table.component.html',
  styleUrls: ['./crud-table.component.scss'],
  providers: [CrudService],
})
export class CrudTableComponent implements OnInit {
  @Input() config: ITableConfig;
  tableName: string = '';
  tableItems: BackendData[] = [];
  tableColumns: string[];
  currentlyEdited: null | BackendData = null;
  currentlyFiltered: null | BackendData = null;

  pagination: IPaginationConfig = {
    currentPage: 1, // first page should be 1 because JSON Server follows the same rule
    lastPage: 0,
    itemsPerPage: 5,
    links: {
      pageFirst: '',
      pagePrev: '',
      pageNext: '',
      pageLast: '',
    },
  };

  constructor(
    private crudService: CrudService,
    public dialog: MatDialog,
    public overlay: Overlay
  ) {}

  openDialog(): void {
    this.dialog.open(DialogComponent, {
      width: '30%',
      height: 'auto',
      scrollStrategy: this.overlay.scrollStrategies.noop(), // // for disabling scroll-bar in dialog window
      data: {
        name: 'register-form',
        columns: this.config.columns,
        labels: { submit: 'Create', reset: 'Clear details' },
        displayDirection: 'column',
        mode: 'create',
        inputData: null,
        submit: this.onCreate,
      },
    });
  }

  private createItem(item: BackendData): void {
    this.crudService.create(this.config.url, item).subscribe(
      () => {
        this.changePage('last');
        this.currentlyEdited = null;
      },
      (msg) => console.log(msg)
    );
  }

  private createUser(user: BackendData): void {
    this.crudService
      .readByProperty(this.config.url, 'email', user['email'])
      .subscribe(
        (users) => {
          if (users.length) {
            console.log('This email address is already in use.');
          } else {
            this.createItem(user);
          }
        },
        (msg) => console.log(msg)
      );
  }

  /* ## Form handlers ## */
  onCreate = (item: BackendData): void => {
    item['password'] ? this.createUser(item) : this.createItem(item);
  };

  onUpdate(item: BackendData): void {
    this.crudService.update(this.config.url, item.id, item).subscribe(
      () => {
        this.tableItems = this.tableItems.map((i: BackendData) =>
          i.id === item.id ? (i = item) : i
        );
        this.currentlyEdited = null;
      },
      (msg) => console.log(msg)
    );
  }

  onDelete(item: BackendData): void {
    this.crudService.delete(this.config.url, item.id).subscribe(
      () => {
        this.tableItems = this.tableItems.filter((i) => i.id !== item.id);

        if (this.tableItems.length === 0) {
          console.log('No items in this table.');
        }
      },
      (msg) => console.log(msg)
    );
  }

  changePage(changeTo: string) {
    switch (changeTo) {
      case 'next': {
        if (this.pagination.currentPage !== this.pagination.lastPage) {
          this.pagination.currentPage += 1;
          this.fetchItems();
        }
        break;
      }

      case 'prev': {
        if (this.pagination.currentPage > 1) {
          this.pagination.currentPage -= 1;
          this.fetchItems();
        }
        break;
      }

      case 'first': {
        this.pagination.currentPage = 1;
        this.fetchItems();

        break;
      }

      case 'last': {
        this.pagination.currentPage = this.pagination.lastPage;
        console.log('lastpage', this.pagination.lastPage);

        this.fetchItems();
        break;
      }
    }
    console.log('[PAGE CHANGED TO]: ', this.pagination.currentPage);
  }

  fetchItems() {
    if (this.crudService) {
      return this.crudService
        .readPagedFiltered(
          this.config.url,
          this.currentlyFiltered,
          this.pagination.currentPage,
          this.pagination.itemsPerPage
        )
        .pipe(
          tap((res: any) => {
            this.pagination.links = setPagesLinks(res);
            console.table(this.pagination.links);
          })
        )
        .subscribe((data) => {
          this.pagination.lastPage = setLastPage(
            this.pagination.links.pageLast
          );

          console.log('[last page]: ', this.pagination.lastPage);

          if (data.body.length > 0) {
            this.tableItems = data.body;
          } else {
          }

          // # Setup column headers
          this.tableColumns = this.config.columns.map((col) => col.label);
        });
    }
  }

  /* ## Filter handlers ## */
  onSubmitFilter(item: BackendData): void {
    this.currentlyFiltered = item;
    this.changePage('first');
  }

  onResetFilter() {
    this.currentlyFiltered = null;
    this.changePage('first');
  }

  /* ## Lifecycle hooks ## */
  ngOnInit(): void {
    this.pagination.itemsPerPage = this.config.defaulItemsPerPage;
    this.fetchItems();
    this.tableName = 'admin-' + this.config.name;
  }
}
