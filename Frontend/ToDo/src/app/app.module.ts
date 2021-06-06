import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { TodoListComponent } from './todo-list/todo-list.component';
import { EditTaskComponent } from './todo-list/edit-task/edit-task.component';
import { ViewTaskComponent } from './todo-list/view-task/view-task.component';
import { CreateTaskComponent } from './todo-list/create-task/create-task.component';

import { TodoListCategoryComponent } from './todo-list-category/todo-list-category.component';
import { CreateCategoryComponent } from './todo-list-category/create-category/create-category.component';
import { EditCategoryComponent } from './todo-list-category/edit-category/edit-category.component';
import { ShareCategoryComponent } from './todo-list-category/share-category/share-category.component';

import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';



import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {ReactiveFormsModule, FormsModule} from '@angular/forms'

import { AlertService } from './_services/alert.service';
import { AuthenticationService } from './_services/authentication.service';
import { AuthGuard } from './_services/auth.guard';
import { UserService } from './_services/user.service';


@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    LoginComponent,
    EditTaskComponent,
    ViewTaskComponent,
    CreateTaskComponent,
    TodoListCategoryComponent,
    CreateCategoryComponent,
    EditCategoryComponent,
    ShareCategoryComponent,
    NavbarComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    MatAutocompleteModule,
    ReactiveFormsModule.withConfig({warnOnNgModelWithFormControl: 'never'}),
    FormsModule
    
  ],
  
  providers: [
    AlertService,
    AuthenticationService,
    AuthGuard,
    UserService
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
