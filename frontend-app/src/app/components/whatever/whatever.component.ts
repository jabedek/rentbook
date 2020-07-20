import { Component, OnInit } from '@angular/core';
import { BooksCrudService } from '../../services/books-crud.service';
import { UsersCrudService } from '../../services/users-crud.service';

@Component({
  selector: 'app-whatever',
  templateUrl: './whatever.component.html',
  styleUrls: ['./whatever.component.scss'],
})
export class WhateverComponent implements OnInit {
  constructor(
    private booksService: BooksCrudService,
    private usersService: UsersCrudService
  ) {}

  ngOnInit(): void {
    this.booksService.read().subscribe((data) => {
      console.log('>>>', data);
    });

    this.usersService.readByProperty('email', 'a@a.a').subscribe((data) => {
      console.log(data);
    });
  }
}
