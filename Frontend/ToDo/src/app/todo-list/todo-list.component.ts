import { Component, Inject, Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {MatDialog} from '@angular/material/dialog'
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';
import { AuthenticationService } from '../_services/authentication.service';
import { UserService } from '../_services/user.service';
import {EditTaskComponent} from './edit-task/edit-task.component'
import {ViewTaskComponent} from './view-task/view-task.component'
import { CreateTaskComponent } from './create-task/create-task.component';
import { User } from '../user'

@Injectable()

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
    currentUser: User;
    currentUserSubscription: Subscription;
    users: User[] = [];
    todos: string[] = [];
    categories: string[] = [];

  constructor(private httpClient: HttpClient, public editDialog: MatDialog, public viewDialog: MatDialog, public createDialog: MatDialog,
          private authenticationService: AuthenticationService, private userService: UserService) { 
            
            this.currentUserSubscription = this.authenticationService.currentUser.subscribe(user => {
            this.currentUser = user;
        });
      }


// this methode make GET rest calls to initialize the tables users, todos and categories
  getData(){
        
      this.userService.getAll().pipe(first()).subscribe(users => {
            this.users = users;
        });


      this.httpClient.get('http://127.0.0.1:8000/api/category').subscribe(
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

    this.httpClient.get('http://127.0.0.1:8000/api/todo').subscribe(
      data => {
        var todo = data as string[];
        for(let elem of todo['results']){
          this.todos.push(elem)
      }
        

      },
      (error) => {
        console.log (error.message);
      }
    );
    }


  deleteTask(id : number) {
    this.httpClient.delete(`http://127.0.0.1:8000/api/todo/${id}`).subscribe(data => {})    
  }


  editTask(id: number, task: any){
    this.httpClient.put(`http://127.0.0.1:8000/api/todo/${id}`, task).subscribe(data => {})
  }


  createTask(task: any){
        this.httpClient.post(`http://127.0.0.1:8000/api/todo/`, task).subscribe(data => {})
  }


  ngOnInit(): void {
      this.getData()

    }


  // this is used to get the title of a category using its id
  public searchCategory(value :string) : string {
    var cat = this.categories.find(element => element['id'] === value)['title'];
  return cat
}


// and this is used to search a category object using its title
public searchCategoryByTitle(title :string) : string {
    var cat = this.categories.find(element => element['title'] === title);
  return cat
}


openDeleteDialog(task: any): void {

  let dialogRef = this.editDialog.open(EditTaskComponent, {
      data: {
        taskId: task.id,
        taskTitle: task.title,
        taskDescription: task.description,
        taskCategory: this.searchCategory(task.category),
        categoryList: this.categories
      }
    });
// after the dialog is closed, if we the result returned is not undefined we call editTask with the new values
    dialogRef.afterClosed().subscribe(result => {
      if (result){
        let newTask = {
          'category': this.searchCategoryByTitle(result.taskCategory),
          'title': result.taskTitle,
          'description': result.taskDescription
        }
        this.editTask(parseInt(result.taskId), newTask)
      }
    });
}

  openEditDialog(task: any): void {

  let dialogRef = this.editDialog.open(EditTaskComponent, {
      data: {
        taskId: task.id,
        taskTitle: task.title,
        taskDescription: task.description,
        taskCategory: this.searchCategory(task.category),
        categoryList: this.categories
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result){
        let newTask = {
          'category': this.searchCategoryByTitle(result.taskCategory),
          'title': result.taskTitle,
          'description': result.taskDescription
        }
        this.editTask(parseInt(result.taskId), newTask)
      }
    });
}
  


openViewDialog(task: any): void {

    this.viewDialog.open(ViewTaskComponent, {
      
      data: {
          taskTitle: task.title,
          taskDescription: task.description,
          taskCategory: this.searchCategory(task.category)
      },
    });
  }

  openCreateDialog(): void {

    let dialogRef = this.createDialog.open(CreateTaskComponent, {
      
      data : this.categories

    });
    dialogRef.afterClosed().subscribe(result => {
      if (result){
        let newTask = {
          'title': result.taskTitle,
          'description': result.taskDescription,
          'category': this.searchCategoryByTitle(result.taskCategory)['id']  
        }
        this.createTask(newTask)
      }
    });
  }
}
  

