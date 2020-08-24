import { AuthService } from '../../../auth/auth.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  auth = null;

  constructor(public authService: AuthService) {}

  logout() {
    this.authService.logout();
  }

  getRole() {
    this.authService.getRole();
  }

  ngOnInit() {
    console.log('header');

    this.authService.auth$.subscribe((data) => {
      this.auth = data.auth;
    });
  }
}
