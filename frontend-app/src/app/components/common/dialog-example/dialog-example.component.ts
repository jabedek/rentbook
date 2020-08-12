import { BackendData } from './../../../types/BackendData';
import { Component, OnInit, Inject } from '@angular/core';

import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
@Component({
  selector: 'app-dialog-example',
  templateUrl: './dialog-example.component.html',
  styleUrls: ['./dialog-example.component.scss'],
})
export class DialogExampleComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<DialogExampleComponent>,
    @Inject(MAT_DIALOG_DATA) public data
  ) {}

  submitItem(item: BackendData) {
    console.log('submitting');
    // console.log(this.data);

    this.data.submit(item);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit(): void {}
}
