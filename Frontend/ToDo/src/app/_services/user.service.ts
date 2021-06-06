import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../user';

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<User[]>(`http://127.0.0.1:8000/api/users/`);
    }

    register(user: any) {
        let newUser = {
          'first_name': user.firstName,
          'last_name': user.lastName,
          'username': user.username,
          'password': user.password
        }
        return this.http.post(`http://127.0.0.1:8000/register/`, newUser);
    }

}