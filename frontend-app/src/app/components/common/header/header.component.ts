import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { eventDispatcher, store } from '../../../store/reducer';
import { UserActionTypes } from '../../../store/actions';
import { IUser } from 'src/app/interfaces/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnChanges {
  @Input() backgroundColor: string = 'primary';
  @Input() user: IUser = null;
  username: string;

  logout() {
    this.username = '';
    eventDispatcher.next({ type: UserActionTypes.USER_LOGOUT });
  }

  constructor() {
    store.subscribe((state) => {
      this.user = state.loggedUser;
      this.username = this.user.email;
    });
  }

  ngOnInit() {
    eventDispatcher.next({ type: UserActionTypes.USER_GET_USER });
  }

  ngOnChanges() {}
}
