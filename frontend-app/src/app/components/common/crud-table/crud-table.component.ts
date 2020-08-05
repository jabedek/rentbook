import { BackendData } from './../../../types/BackendData';
import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { CrudService } from '../../../services/crud.service';
import { ITableConfig } from '../../../interfaces';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-crud-table',
  templateUrl: './crud-table.component.html',
  styleUrls: ['./crud-table.component.scss'],
  providers: [CrudService],
})
export class CrudTableComponent implements OnInit, OnChanges {
  @Input() config: ITableConfig;
  items = [];
  displayedColumns: string[];
  currentlyEdited: null | BackendData = null;

  resultMessage: string = '';

  crudServiceSub: Subscription;

  constructor(private crudService: CrudService) {}

  private setupColumnHeaders() {
    this.displayedColumns = this.config.columns.map((col) => col.label);
  }

  onCreate(item: BackendData) {
    this.setupColumnHeaders();

    if (item['email']) {
      this.crudService
        .readByProperty(this.config.url, 'email', item['email'])
        .subscribe(
          (users) => {
            if (users.length) {
              let msg = 'This email address is already in use.';
              this.resultMessage = msg;
            } else {
              this.crudService.create(this.config.url, item).subscribe(
                (user) => {
                  let msg = `User ${user.email} has been created.`;
                  this.resultMessage = msg;
                  this.fetchItems();
                },
                (err) => (this.resultMessage += `Error: ${err}`)
              );
            }
          },
          (err) => (this.resultMessage += `_Error: ${err}`)
        );
    } else {
      this.crudService.create(this.config.url, item).subscribe((item) => {
        let msg = `Item has been created.`;
        this.resultMessage = msg;
        this.fetchItems(), (err) => console.log(err);
      });
    }

    this.fetchItems();
  }

  onUnpick() {
    this.currentlyEdited = null;
    this.resultMessage = '';
  }

  onUpdate(item: BackendData) {
    this.setupColumnHeaders();

    this.crudService.update(this.config.url, item.id, item).subscribe(() => {
      this.resultMessage = `Item ${item.id} has been updated.`;
      this.fetchItems(), (err) => console.log(err);
    });
  }

  onDelete(item: BackendData) {
    this.items = this.items.filter((i) => {
      return item.id !== i.id;
    });

    this.setupColumnHeaders();

    this.crudService.delete(this.config.url, item.id).subscribe(
      () => {
        this.fetchItems();
      },
      (err) => console.log(err)
    );

    if (this.items.length == 0) {
      console.log('no items');
    }
  }

  onPickItem(item: BackendData) {
    this.resultMessage = '';
    this.currentlyEdited = item;
  }

  isBigContentColumn(col): boolean {
    let widerColNames = ['id', 'dateAdded'];

    return !!widerColNames.find((name) => name === col.name);
  }

  fetchItems() {
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
