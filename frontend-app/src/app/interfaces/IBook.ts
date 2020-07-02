export interface IBook {
  id: number;
  title: string;
  author: string;
  available: boolean;
  heldByClient?: number;
}
