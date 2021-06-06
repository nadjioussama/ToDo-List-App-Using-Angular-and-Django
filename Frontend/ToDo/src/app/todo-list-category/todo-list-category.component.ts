import { Component, Inject, Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {MatDialog} from '@angular/material/dialog'

import {EditCategoryComponent} from './edit-category/edit-category.component'
import {CreateCategoryComponent} from './create-category/create-category.component'
import { ShareCategoryComponent } from './share-category/share-category.component';



@Component({
  selector: 'app-todo-list-category',
  templateUrl: './todo-list-category.component.html',
  styleUrls: ['./todo-list-category.component.css']
})
export class TodoListCategoryComponent implements OnInit {

  constructor(private httpClient: HttpClient, public editDialog: MatDialog, public createDialog: MatDialog, public shareDialog: MatDialog) { }

  categories: string[] = [];

  getData(){
      this.httpClient.get('http://127.0.0.1:8000/api/category/').subscribe(
      data => {
        var cats = data as string[];
        for(let elem of cats['results']){
          this.categories.push(elem)
        }
      },
      (error) => {
        console.log (error.message);
      }
    );
    }


  editCategory(id: number, category: any){
    this.httpClient.put(`http://127.0.0.1:8000/api/category/${id}`, category).subscribe(data => {})
  }

  createCategory(category: any){
        this.httpClient.post(`http://127.0.0.1:8000/api/category/`, category).subscribe(data => {})
  }

  shareCategory(id : number) {
    // TODO
  }


  ngOnInit(): void {
      this.getData()

  }
  

  openEditDialog(category: any): void {

  let dialogRef = this.editDialog.open(EditCategoryComponent, {
      data: {
        categoryTitle: category.title,
        categoryId: category.id
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result){
        let newCategory = {
          'title': result.categoryTitle
        }
        this.editCategory(parseInt(result.categoryId), newCategory)
      }
    });
}
  

  openCreateDialog(): void {

  let dialogRef = this.editDialog.open(CreateCategoryComponent, {
      data: {
        categoryTitle: "",
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result){
        let newCategory = {
          'title': result.categoryTitle
        }
        this.createCategory(newCategory)
      }
    });
  }
  openShareDialog():void {
    // TODO
  }
}
