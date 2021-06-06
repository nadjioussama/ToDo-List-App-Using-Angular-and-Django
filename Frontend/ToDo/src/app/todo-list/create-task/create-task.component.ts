import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog'
import {Component, Inject, OnInit, } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {
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

// we used the passed data to add it to the autocomplete
  constructor(
    public dialogRef: MatDialogRef<CreateTaskComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {
      this.categories = data
    }


  onCancelClick(): void {
    this.dialogRef.close();
  }

  // this part is used for the suggestion while typing for autocomplete categories
  private _filter(value: string): string[] {
      const filterValue = value.toLowerCase();

      return this.categories.filter(option => option['title'].toLowerCase().includes(filterValue));
  }

}
