import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/crud-table/crud.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss'],
})
export class AdminDashboardComponent implements OnInit {
  booksNumber: number = 0;
  usersNumber: number = 0;

  bookLastAdded: string = '';
  userLastAdded: string = '';
  userEmail: string = '';
  bookTitle: string = '';

  constructor(private crudService: CrudService) {}

  setDetails(data: any[], tableName: string) {
    if (tableName === 'users') {
      this.usersNumber = data.length;
      this.userLastAdded = data[data.length - 1].dateAdded;
      this.userEmail = data[data.length - 1].email;
    }

    if (tableName === 'books') {
      this.booksNumber = data.length;
      this.bookLastAdded = data[data.length - 1].dateAdded;
      this.bookTitle = data[data.length - 1].title;
    }
  }

  ngOnInit(): void {
    this.crudService
      .read('http://localhost:3000/books')
      .subscribe((data) => this.setDetails(data, 'books'));

    this.crudService
      .read('http://localhost:3000/users')
      .subscribe((data) => this.setDetails(data, 'users'));
  }
}
