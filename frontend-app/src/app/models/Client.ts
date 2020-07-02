/*
db.json "clients" entity:
   "id": 1234,
      "name": "John",
      "lastname": "Doe",
      "ordersHistory": [
        {
          "orderId": 5678,
          "latePaymentAmount": 0
        }
*/

import { IClient } from '../interfaces/IClient';
import { IHistoricOrder } from '../interfaces/IHistoricOrder';

export class Client implements IClient {
  id = 0; // uuid??
  name = 'John';
  lastname = 'Doe';
  ordersHistory = [{ orderId: 5678, latePaymentAmount: 0 }];

  constructor(
    name: string,
    lastname: string,
    ordersHistory: IHistoricOrder[],
    id?: number
  ) {
    this.name = name;
    this.lastname = lastname;
    this.ordersHistory = ordersHistory;
    if (id) {
      this.id = id;
    }
  }
}
