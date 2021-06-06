import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog'
import {Component, Inject, OnInit, } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'edit-task',
  templateUrl: 'edit-task.component.html',
  styleUrls: ['edit-task.component.css']
})


export class EditTaskComponent implements OnInit{
  
  myControl = new FormControl();
  filteredOptions: Observable<string[]>;
  categories: string[] = [];

  ngOnInit() {
    
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }


  constructor(
    public dialogRef: MatDialogRef<EditTaskComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      this.categories = data.categoryList
    }


  onCancelClick(): void {
    this.dialogRef.close();
  }

  // the same as create task dialog, this is for autocomplete
  private _filter(value: string): string[] {
      const filterValue = value.toLowerCase();

      return this.categories.filter(option => option['title'].toLowerCase().includes(filterValue));
  }

}
