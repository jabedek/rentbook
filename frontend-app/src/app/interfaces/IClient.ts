import { IHistoricOrder } from './IHistoricOrder';

export interface IClient {
  id: number;
  name: string;
  lastname: string;
  ordersHistory: IHistoricOrder[];
}
