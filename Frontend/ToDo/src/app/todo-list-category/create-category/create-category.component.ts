import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog'
import {Component, Inject, OnInit, } from '@angular/core';

@Component({
  selector: 'app-create-category',
  templateUrl: './create-category.component.html',
  styleUrls: ['./create-category.component.css']
})
export class CreateCategoryComponent {

    constructor(
    public dialogRef: MatDialogRef<CreateCategoryComponent>) {}

  onCancelClick(): void {
    this.dialogRef.close();
  }

}
