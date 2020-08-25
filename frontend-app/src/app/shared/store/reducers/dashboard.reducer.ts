import { DASHBOARD_ACTION } from './../actions/dashboard.actions';
import { DashboardState } from './../../../shared/interfaces/app-state';

export const initialState: DashboardState = {
  users: 0,
  books: 0,
};

export function reducer(
  state = initialState,
  action: DASHBOARD_ACTION
): DashboardState {
  switch (action.type) {
    case '[DASHBOARD] SET USERS':
      return { ...state, users: action.payload };
    case '[DASHBOARD] SET BOOKS':
      return { ...state, books: action.payload };
    case '[DASHBOARD] SET PRODS':
      return {
        ...state,
        users: action.payload.users,
        books: action.payload.books,
      };
    default:
      return state;
  }
}
