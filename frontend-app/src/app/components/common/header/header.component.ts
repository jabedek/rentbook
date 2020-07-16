import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { eventDispatcher, store } from '../../../store/reducer';
import { ActionTypes } from '../../../store/actions';
import { User } from 'src/app/models/User';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnChanges {
  @Input() backgroundColor: string = 'primary';
  @Input() user: User = null;

  logout() {
    eventDispatcher.next({ type: ActionTypes.USER_LOGOUT });
  }

  constructor() {
    store.subscribe((state) => {
      this.user = state.loggedUser;
    });
  }

  ngOnInit() {
    eventDispatcher.next({ type: ActionTypes.USER_GET_USER });
  }

  ngOnChanges() {
    console.log('CHANGE:', this.user);
  }
}
