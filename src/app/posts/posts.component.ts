import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { catchError, map, Observable, of } from 'rxjs';
import { Post } from './posts.model';
import { PostsService } from './posts.service';

@Component({
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent {
  posts$ = this.postsService.posts$.pipe(map(posts => {
    return posts.filter(p => {
      return p.userId == this.userId;
    })
    }),catchError(()=>of(null)));
  public userId: string|null = '';

  constructor(private postsService: PostsService, private route: ActivatedRoute) { 
    route.paramMap.subscribe(par => {
      this.userId = par.get('id');
    })
  }

}
