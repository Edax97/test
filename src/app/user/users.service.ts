import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  users$ = this.http.get<User[]>('https://jsonplaceholder.typicode.com/users');

  constructor(private http: HttpClient) { }
}
