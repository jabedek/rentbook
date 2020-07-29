import {
  Component,
  OnInit,
  ViewChild,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { DynamicFormComponent } from './../forms/dynamic-form/dynamic-form.component';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CrudService } from '../../../services/crud.service';
import { QuestionService } from '../../../services/question.service';
import { ITableConfig } from '../../../interfaces';
import { QuestionBase } from '../../../models/dynamic-questions/QuestionBase';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-crud-table',
  templateUrl: './crud-table.component.html',
  styleUrls: ['./crud-table.component.scss'],
  providers: [CrudService, QuestionService],
})

// TO/MAYBE DO? Type input for this component (Passing types <T>)
export class CrudTableComponent implements OnInit, OnChanges {
  questions$: Observable<QuestionBase<any>[]> = null;

  @Input() config: ITableConfig;
  items: any[] | null = [];
  dataSource;
  displayedColumns: string[];

  constructor(
    public dialog: MatDialog,
    private crudService: CrudService,
    private questionService: QuestionService
  ) {
    // this.questions$ = this.questionService.getQuestions();
  }

  private mapItemPropsToColumns() {
    if (this.items.length) {
      this.displayedColumns = [
        ...Object.keys(this.items[0]),
        ...this.config.columns,
      ];
    }
    this.dataSource = new MatTableDataSource(this.items);

    //
  }

  onDelete(item) {
    this.items = this.items.filter((i) => {
      return item.id !== i.id;
    });

    this.mapItemPropsToColumns();

    this.crudService.delete(this.config.url, item.id).subscribe(
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

  openDialog(mode, item?) {
    // console.log('openDialog', mode, item);
    // const dialogConfig = new MatDialogConfig();
    // dialogConfig.disableClose = false;
    // dialogConfig.autoFocus = true;
    // dialogConfig.data = {
    //   mode,
    //   item,
    // };
    // const dialogRef = this.dialog.open(DynamicFormComponent, dialogConfig);
    // dialogRef.afterClosed().subscribe(() => this.fetchItems());
  }

  fetchItems() {
    if (this.crudService) {
      this.crudService.read(this.config.url).subscribe((data) => {
        if (data.length > 0) {
          this.items = data;

          this.questionService.mapItemToQuestions(this.items[0]);
        } else {
          this.items = [];
        }

        this.mapItemPropsToColumns();
      });
    }
  }

  @ViewChild(MatSort, { static: true }) sort: MatSort;

  ngOnInit(): void {
    this.fetchItems();
    // if (this.items.length > 0) {
    //   this.questions$ = this.questionService.mapItemToQuestions(this.items[0]);
    // }
  }

  ngOnChanges(changes: SimpleChanges) {
    // console.log('crud-table: changes');
    // console.log(changes);
  }
}
