import { Component, OnInit } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import * as _ from 'lodash';
import { User } from './user.model';
import { UsersService } from './users.service';

@Component({
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  users$ = this.usersService.users$.pipe(map(us => {
    return us.map(u => {
      u.username = _.toUpper(u.username);
      return u
    });
  }), catchError(e => of(null)))

  constructor(private usersService: UsersService) {
  }

  ngOnInit(): void {
    
  }

}
