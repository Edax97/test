import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from './posts.model';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  
  posts$ = this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts');

  constructor(private http: HttpClient) { }
}
