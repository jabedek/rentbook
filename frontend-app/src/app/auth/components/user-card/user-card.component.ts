import { User } from './../../../interfaces/user';
import { Component, OnInit, Input } from '@angular/core';

const passwordDefault = '********';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss'],
})
export class UserCardComponent implements OnInit {
  @Input() user: User = null;
  password = passwordDefault;

  togglePassword() {
    if (this.password == passwordDefault) {
      if (this.user.password) {
        this.password = this.user.password;
      }
    } else {
      this.password = passwordDefault;
    }
  }

  ngOnInit(): void {}
}
