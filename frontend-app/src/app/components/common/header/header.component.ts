import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { eventDispatcher, store } from '../../../store/reducer';
import { ActionTypes } from '../../../store/actions';
import { IUser } from 'src/app/interfaces/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnChanges {
  @Input() backgroundColor: string = 'primary';
  @Input() user: IUser = null;
  accountButtonText: string = 'Account';

  logout() {
    this.accountButtonText = 'Account';
    eventDispatcher.next({ type: ActionTypes.USER_LOGOUT });
  }

  constructor() {
    store.subscribe((state) => {
      this.user = state.loggedUser;
      this.accountButtonText = this.user.email;
    });
  }

  ngOnInit() {
    eventDispatcher.next({ type: ActionTypes.USER_GET_USER });
  }

  ngOnChanges() {}
}
