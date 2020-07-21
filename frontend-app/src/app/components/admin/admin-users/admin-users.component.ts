import { Component, OnInit } from '@angular/core';
import { User } from '../../../models/User';
import { UsersCrudService } from '../../../services/users-crud.service';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.scss'],
})
export class AdminUsersComponent implements OnInit {
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
