export interface IBook {
  id: string;
  title: string;
  author: string;
  genre: string;
  available: boolean;
  heldByClient: number | null | undefined;
}
