import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { User } from '../../models/User';
import { UsersCrudService } from '../../services/users-crud.service';

@Component({
  selector: 'app-admin-users-crud',
  templateUrl: './admin-users-crud.component.html',
  styleUrls: ['./admin-users-crud.component.scss'],
})
export class AdminUsersCrudComponent implements OnInit {
  users: User[];
  usersService: UsersCrudService;

  constructor(service: UsersCrudService) {
    this.usersService = service;
  }

  getUsers() {
    console.log('updating users in Parent');
    return this.usersService.read().subscribe(
      (users) => {
        console.log('>', users);
        this.users = users;

        // return books;
      },
      (err) => {
        console.log(err);
        // return [];
      }
    );
  }

  deleteUser(user: User) {
    // Delete from UI
    this.users = this.users.filter((b) => {
      return user.id !== b.id;
    });

    // Delete from server
    this.usersService.delete(user.id).subscribe();

    this.getUsers();
  }

  ngOnInit(): void {
    this.getUsers();
  }

  ngOnChanges(): void {
    console.log('changes');
  }
}
