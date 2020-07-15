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
    this.addUser({ id: UUID.UUID(), ...formValue });
  }

  addUser(user: User) {
    let matchingPwd: User[] | null;
    this.usersService.getUsersByProperty('email', user.email).subscribe(
      (users) => {
        console.log(users);

        if (users.length) {
          matchingPwd = users.filter((u) => u.password === user.password);
          console.log(matchingPwd);
        } else {
          matchingPwd = null;
        }
      },
      (err) => {
        console.log(err);
      }
    );

    //
    // this.usersService.addUser(user).subscribe(
    //   (user) => console.log('>', user),
    //   (err) => console.log(err)
    // );
  }

  ngOnInit(): void {}
}
