import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/crud-table/crud.service';
import { AppState } from 'src/app/interfaces/app-state';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss'],
})
export class AdminDashboardComponent implements OnInit {
  booksNumber: number = 0;
  usersNumber: number = 0;
  constructor(private crudService: CrudService) {}

  ngOnInit(): void {
    this.crudService
      .read('http://localhost:3000/books')
      .subscribe((data) => (this.booksNumber = data.length));

    this.crudService
      .read('http://localhost:3000/users')
      .subscribe((data) => (this.usersNumber = data.length));
  }
}
