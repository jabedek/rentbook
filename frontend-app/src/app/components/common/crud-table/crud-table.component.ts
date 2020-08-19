/*
Hiding scroll in dialog: https://github.com/angular/components/issues/8706
"
constructor(public dialog: MatDialog, overlay: Overlay) {
  dialog.open(JazzDialog, {
    scrollStrategy: overlay.scrollStrategies.noop()
  });
}
"
*/
import { tap } from 'rxjs/operators';
import { DialogComponent } from './../../common/dialog/dialog.component';
import { BackendData } from './../../../types/BackendData';
import { Component, OnInit, Input, OnChanges, Inject } from '@angular/core';
import { CrudService } from '../../../services/crud.service';
import { ITableConfig } from '../../../interfaces/table';
import { parseLinkHeader } from '../../../helpers/parseLinkHeader';

import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { Overlay } from '@angular/cdk/overlay';

@Component({
  selector: 'app-crud-table',
  templateUrl: './crud-table.component.html',
  styleUrls: ['./crud-table.component.scss'],
  providers: [CrudService],
})
export class CrudTableComponent implements OnInit, OnChanges {
  @Input() config: ITableConfig;
  items: BackendData[] = [];
  paginatedItems: BackendData[] = [];
  currentPage: number = 1; // first page should be 1 because JSON Server follows the same rule
  lastPage: number = 0;
  itemsPerPage = 5;
  displayedColumns: string[];
  currentlyEdited: null | BackendData = null;
  status: string = '';
  name: string = '';

  public first: string = '';
  public prev: string = '';
  public next: string = '';
  public last: string = '';

  constructor(
    private crudService: CrudService,
    public dialog: MatDialog,
    public overlay: Overlay
  ) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
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

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }

  /* ## Table functions ## */
  private setupColumnHeaders(): void {
    this.displayedColumns = this.config.columns.map((col) => col.label);
  }

  fetchItemsPages(optionalUrl?: string) {
    let url = optionalUrl || this.config.url;
    if (this.crudService) {
      return this.crudService
        .readPages2(url, this.currentPage, this.itemsPerPage)
        .pipe(
          tap((res: any) => {
            const Link = parseLinkHeader(res.headers.get('Link'));
            this.first = Link['first'];
            this.last = Link['last'];
            this.prev = Link['prev'];
            this.next = Link['next'];
          })
        )
        .subscribe((data) => {
          let urlParts = this.last.split('=');
          let params = urlParts[1].split('&');
          let lastPage: number = +params[0];

          this.lastPage = lastPage;

          console.log('lastPage', lastPage);
          console.log('first', this.first);
          console.log('last', this.last);
          console.log('prev', this.prev);
          console.log('next', this.next);

          if (data.body.length > 0) {
            this.items = data.body;
          } else {
          }

          this.setupColumnHeaders();
        });
    }
  }

  changePage(changeType: string) {
    switch (changeType) {
      case 'next': {
        if (this.currentPage < this.lastPage) {
          this.currentPage += 1;
          this.fetchItemsPages();
        }

        break;
      }

      case 'prev': {
        if (this.currentPage > 1) {
          this.currentPage -= 1;
          this.fetchItemsPages();
        }
        break;
      }

      case 'first': {
        this.currentPage = 1;
        this.fetchItemsPages();
        break;
      }

      case 'last': {
        if (this.currentPage < this.lastPage) {
          this.currentPage = this.lastPage;
          this.fetchItemsPages();
        }

        break;
      }
    }
  }

  fetchItems(): void {
    if (this.crudService) {
      this.crudService.read(this.config.url).subscribe((data) => {
        if (data.length > 0) {
          this.items = data;
          this.status = ` items fetched successfully.`;
        } else {
          this.status = ` no items in table ${this.config.name}.`;
        }

        this.setupColumnHeaders();
      });
    }
  }

  private createUser(user: BackendData): void {
    this.crudService
      .readByProperty(this.config.url, 'email', user['email'])
      .subscribe(
        (users) => {
          if (users.length) {
            this.status = 'this email address is already in use.';
          } else {
            this.crudService.create(this.config.url, user).subscribe(
              (newUser) => {
                this.status = `newUser [${newUser.email}] has been created.`;
                this.fetchItemsPages().add(this.changePage('last'));
                // if (this.items.length == this.itemsPerPage) {
                //   // this.items.push(newUser);
                //   // this.changePage('last');
                //   this.fetchItemsPages().add(this.changePage('last'));
                //   // this.changePage('last');
                // } else {
                //   this.changePage('last');
                //   this.items.push(newUser);
                // }

                this.currentlyEdited = null;
              },
              (msg) => (this.status = `EMAIL_IN_USE Error: ${msg}`)
            );
          }
        },
        (msg) => (this.status += `CREATING Error: ${msg}`)
      );
  }

  private createItem(item: BackendData): void {
    this.crudService.create(this.config.url, item).subscribe(
      (newItem) => {
        this.status = `item has been created.`;
        // this.currentPage = this.lastPage;
        // this.changePage('last');
        this.fetchItemsPages().add(this.changePage('last'));
        // this.items.push(newItem);
        // this.items = [newItem, ...this.items];
        this.currentlyEdited = null;
      },
      (msg) => (this.status = `CREATING Error: ${msg}`)
    );
  }

  /* ## Form handlers ## */
  onCreate = (item: BackendData): void => {
    // # Create item using appropriate function based on whether item is User.
    // # In available backend types only User has 'password' property.
    item['password'] ? this.createUser(item) : this.createItem(item);
  };

  onUpdate(item: BackendData): void {
    this.crudService.update(this.config.url, item.id, item).subscribe(
      () => {
        this.status = `updated item [${item.id}].`;
        this.items = this.items.map((i: BackendData) =>
          i.id === item.id ? (i = item) : i
        );
        this.currentlyEdited = null;
      },
      (msg) => (this.status = `UPDATING Error: ${msg}`)
    );
  }

  onDelete(item: BackendData): void {
    this.crudService.delete(this.config.url, item.id).subscribe(
      () => {
        this.items = this.items.filter((i) => i.id !== item.id);

        this.status = `deleted item [${item.id}].`;
        if (this.items.length === 0) {
          this.status += ` no items in table ${this.config.name}.`;
        }
      },
      (msg) => {
        this.status = `DELETING Error: ${msg}`;
      }
    );
  }

  onPickTableItem(item: BackendData): void {
    this.status = `editing item [${item.id}].`;
    this.currentlyEdited = item;
  }

  onUnpickTableItem(): void {
    this.currentlyEdited = null;
    this.status = '';
  }

  onUnpickTableItemCreate(): void {
    this.status = '';
  }

  /* ## Filter handlers ## */
  onSubmitFilter(item: BackendData): void {
    this.crudService.filter(this.config.url, item).subscribe(
      (data) => {
        this.items = data;
      },
      (msg) => (this.status = ` FILTERING Error: ${msg}`)
    );
  }

  lesserThan(index) {
    return index < this.itemsPerPage;
  }

  onResetFilter(): void {
    this.status = '';
    // this.fetchItems(this.config.url);
    this.fetchItemsPages(this.config.url);
  }

  /* ## Lifecycle hooks ## */
  ngOnInit(): void {
    this.status = '';
    this.itemsPerPage = this.config.defaulItemsPerPage;
    console.log('>>>', this.config);

    // this.fetchItems(this.config.url);
    this.fetchItemsPages(this.config.url);
    this.name = 'admin-' + this.config.name;
  }

  ngOnChanges(): void {
    if (!this.items.length) {
      this.status = `No items in table ${this.config.name}`;
    }
  }
}
