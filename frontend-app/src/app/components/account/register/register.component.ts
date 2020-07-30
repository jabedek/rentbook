import { CrudService } from 'src/app/services/crud.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { configureNewItem } from '../../../utils';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  providers: [CrudService],
})
export class RegisterComponent implements OnInit {
  registerForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
  });

  resultMessage: string = '';

  constructor(
    private usersService: CrudService,
    private formBuilder: FormBuilder
  ) {}

  onSubmit(formValue) {
    const user = configureNewItem({ ...formValue, role: 'USER' });

    this.usersService
      .create('http://localhost:3000/users', user)
      .subscribe((err) => console.log(err));
  }

  ngOnInit(): void {}
}
