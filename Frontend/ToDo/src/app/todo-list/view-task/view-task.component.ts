import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog'
import { Component, Inject} from '@angular/core';

export interface TaskData {
  taskTitle: string,
  taskDescription: string,
  taskCategory: any
}

@Component({
  selector: 'view-task',
  templateUrl: 'view-task.component.html',
  styleUrls: ['view-task.component.css']
})

export class ViewTaskComponent {

  constructor(
    public dialogRef: MatDialogRef<ViewTaskComponent>,
    @Inject(MAT_DIALOG_DATA) public data: TaskData) {}

  onCloseClick(): void {
    this.dialogRef.close();
  }

  

}
