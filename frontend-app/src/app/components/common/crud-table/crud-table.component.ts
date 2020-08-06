import { BackendData } from './../../../types/BackendData';
import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { CrudService } from '../../../services/crud.service';
import { ITableConfig } from '../../../interfaces/table';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-crud-table',
  templateUrl: './crud-table.component.html',
  styleUrls: ['./crud-table.component.scss'],
  providers: [CrudService],
})
export class CrudTableComponent implements OnInit, OnChanges {
  @Input() config: ITableConfig;
  items: BackendData[] = [];
  displayedColumns: string[];
  currentlyEdited: null | BackendData = null;
  status: string = '';
  crudServiceSub: Subscription;

  constructor(private crudService: CrudService) {}

  /* ## Table functions ## */
  private setupColumnHeaders(): void {
    this.displayedColumns = this.config.columns.map((col) => col.label);
  }

  fetchItems(): void {
    if (this.crudService) {
      this.crudService.read(this.config.url).subscribe((data) => {
        if (data.length > 0) {
          this.items = data;
        } else {
          this.items = [];
        }

        this.setupColumnHeaders();
      });
    }
  }

  createUser(user: BackendData) {
    this.crudService
      .readByProperty(this.config.url, 'email', user['email'])
      .subscribe(
        (users) => {
          if (users.length) {
            this.status = 'this email address is already in use.';
          } else {
            this.crudService.create(this.config.url, user).subscribe(
              (user) => {
                this.status = `user [${user.email}] has been created.`;
                this.items.push(user);
                this.currentlyEdited = null;
              },
              (msg) => (this.status = `EMAIL_IN_USE Error: ${msg}`)
            );
          }
        },
        (msg) => (this.status += `CREATING Error: ${msg}`)
      );
  }

  createItem(item: BackendData) {
    this.crudService.create(this.config.url, item).subscribe(
      () => {
        this.status = `item has been created.`;
        this.items.push(item);
        this.currentlyEdited = null;
      },
      (msg) => (this.status = `CREATING Error: ${msg}`)
    );
  }

  /* ## Dynamic form handlers ## */
  onCreate(item: BackendData): void {
    // Create item using appropriate function based on whether item is User.
    // In available backend types only User has 'email' property.
    item['email'] ? this.createUser(item) : this.createItem(item);
  }

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
          this.status += ` No items in table ${this.config.name}.`;
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

  onUnpickTableItem() {
    this.currentlyEdited = null;
    this.status = '';
  }

  /* ## Dynamic filter form handlers ## */
  onSubmitFilter(item: BackendData): void {
    this.crudService.filter(this.config.url, item).subscribe(
      (data) => {
        this.items = data;
      },
      (msg) => (this.status = ` FILTERING Error: ${msg}`)
    );
  }

  onResetFilter() {
    this.status = '';
    this.fetchItems();
  }

  /* ## Angular hooks ## */

  ngOnInit(): void {
    this.fetchItems();
    if (!this.items.length) {
      console.log('no items');
      this.status = `No items in table ${this.config.name}`;
    }
  }

  ngOnChanges(): void {
    if (!this.items.length) {
      console.log('no items');
      this.status = `No items in table ${this.config.name}`;
    }
  }
}
