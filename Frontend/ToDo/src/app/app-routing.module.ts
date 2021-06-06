import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoListCategoryComponent } from './todo-list-category/todo-list-category.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { AuthGuard } from './_services/auth.guard';

const routes: Routes = [
    { 
      path: '', component: TodoListComponent, canActivate: [AuthGuard] 
    },
    {
      path: "categories",
      component: TodoListCategoryComponent,
      canActivate: [AuthGuard]
    },
    { 
      path: 'login', component: LoginComponent 
    },
    { 
      path: 'register', component: RegisterComponent 
    },

    // otherwise redirect to home
    { 
      path: '**', redirectTo: '' 
    }
  ]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
