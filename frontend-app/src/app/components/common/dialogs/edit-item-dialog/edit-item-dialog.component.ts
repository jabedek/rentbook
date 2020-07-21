import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-item-dialog',
  templateUrl: './edit-item-dialog.component.html',
  styleUrls: ['./edit-item-dialog.component.scss'],
})
export class EditItemDialogComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  @Input() component;
  @Input() item;

  openDialog() {
    if (this.component) this.dialog.open(this.component, { data: this.item });
  }

  ngOnInit(): void {
    // console.log('>>', this.item);
  }
}
