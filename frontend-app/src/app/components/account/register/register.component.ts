import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UsersService } from '../../../services/users.service';
import { User } from 'src/app/models/User';
import { UUID } from 'angular2-uuid';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerForm = this.formBuilder.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  warningVisibility: string = 'hidden';
  result: string = '';

  constructor(
    private usersService: UsersService,
    private formBuilder: FormBuilder
  ) {}

  onSubmit(formValue) {
    const registrationDetails: User = { id: UUID.UUID(), ...formValue };
    this.addUser(registrationDetails);
  }

  addUser(user: User) {
    this.usersService.addUser(user).subscribe(
      (user) => console.log('>', user),
      (err) => console.log(err)
    );
  }

  getUsers() {
    this.usersService.getUsers().subscribe(
      (users) => console.log(users),
      (err) => console.log(err)
    );
  }

  getUserByProperty() {
    this.usersService
      .getUser('id', '00000000-0000-0000-0000-000000000000')
      .subscribe((user) => console.info(user));
  }

  ngOnInit(): void {
    this.getUsers();
  }
}
