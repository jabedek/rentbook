export interface IBook {
  id: number;
  title: string;
  author: string;
  genre: string;
  available: boolean;
  heldByClient: number | null | undefined;
}
