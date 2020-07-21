import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddBookFormComponent } from '../../forms/add-book-form/add-book-form.component';
// import { AdminBooksAddComponent } from 'src/app/components/admin/admin-books-add/admin-books-add.component';

export interface DialogData {
  animal: 'panda' | 'unicorn' | 'lion';
}

/**
 * @title Injecting data when opening a dialog
 */

@Component({
  selector: 'app-add-item-dialog',
  templateUrl: './add-item-dialog.component.html',
  styleUrls: ['./add-item-dialog.component.scss'],
})
export class AddItemDialogComponent {
  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(AddBookFormComponent);
  }
}
