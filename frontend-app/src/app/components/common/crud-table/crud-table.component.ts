import { ITableColumn } from './../../../interfaces/table';
import { BackendData } from './../../../types/BackendData';
import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
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

  private setupColumnHeaders(): void {
    this.displayedColumns = this.config.columns.map((col) => col.label);
  }

  onCreate(item: BackendData): void {
    this.setupColumnHeaders();

    if (item['email']) {
      this.crudService
        .readByProperty(this.config.url, 'email', item['email'])
        .subscribe(
          (users) => {
            if (users.length) {
              let msg = 'this email address is already in use.';
              this.status = msg;
            } else {
              this.crudService.create(this.config.url, item).subscribe(
                (user) => {
                  let msg = `user [${user.email}] has been created.`;
                  this.status = msg;
                  this.fetchItems();
                },
                (err) => (this.status += `Error: ${err}`)
              );
            }
          },
          (err) => (this.status += `_Error: ${err}`)
        );
    } else {
      this.crudService.create(this.config.url, item).subscribe((item) => {
        let msg = `item has been created.`;
        this.status = msg;
        this.fetchItems(), (err) => console.log(err);
      });
    }

    this.fetchItems();
    this.currentlyEdited = null;
  }

  onUnpick() {
    this.currentlyEdited = null;
    this.status = '';
  }

  onUpdate(item: BackendData) {
    this.setupColumnHeaders();

    this.crudService.update(this.config.url, item.id, item).subscribe(() => {
      this.status = `item [${item.id}] has been updated.`;
      this.fetchItems(), (err) => console.log(err);
    });

    this.currentlyEdited = null;
  }

  onDelete(item: BackendData): void {
    this.items = this.items.filter((i) => {
      return item.id !== i.id;
    });

    this.setupColumnHeaders();

    this.crudService.delete(this.config.url, item.id).subscribe(
      () => {
        this.fetchItems();
      },
      (err) => {
        this.status += err;
      }
    );

    if (this.items.length == 0) {
      console.log('no items');
    }

    this.status = `deleted item [${item.id}].`;
  }

  onPickItem(item: BackendData): void {
    this.status = `editing item [${item.id}].`;
    this.currentlyEdited = item;
  }

  isBigContentColumn(col: ITableColumn): boolean {
    let widerColNames = ['id', 'dateAdded'];

    return !!widerColNames.find((name) => name === col.name);
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

  ngOnInit(): void {
    this.fetchItems();
  }

  ngOnChanges(changes: SimpleChanges) {}
}
