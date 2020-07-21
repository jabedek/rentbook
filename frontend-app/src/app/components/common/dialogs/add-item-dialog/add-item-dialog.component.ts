import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

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

  @Input() component;

  openDialog() {
    if (this.component) this.dialog.open(this.component);
  }
}
